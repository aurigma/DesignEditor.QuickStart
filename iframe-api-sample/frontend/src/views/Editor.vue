<template>
    <div id="wrapper">
        <div id="content">

            <!-- The design page -->
            <div id="editorPage" class="area" v-show="currentStage == 'edit'">
                <div id="iframeWrapper">
                    <iframe id="editor-frame" width="100%" height="800px"></iframe>
                </div>
                <div id="saveAndNextButtonsWrapper" v-show="editorLoaded">
                    <input id="nextButton" type="button" class="btn btn-success btn-lg agreement-button" value="Finish Design" @click="getPreview"/>
                </div>
            </div>
            <!--The approval page -->
            <div id="approvePage" class="area" v-show="currentStage == 'preview'">
                <div class="container-fluid">
                    <h1>Approve Your Design</h1>
                    <!-- Proof images -->
                    <img class="previewImg" id="preview"  :src="previewImg"/>
                </div>
                <p/>
                <div id="approveButtonWrapper">
                    <input id="approveButton" type="button" class="btn btn-success btn-lg agreement-button" value="Approve" @click="saveProduct"/>
                </div>
            </div>
            <!-- The finish page -->
            <div id="finishOrderPage" class="area" v-show="currentStage == 'finish'">
                <h1 class="">Your Design is Ready</h1>
                <!-- The link for downloading the hi-res output -->
                The print-ready file can be downloaded from <a :href="hiResLink">this link</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { IFrameApiService } from '../code/IFrameApiService'
    export default Vue.extend({
        name: 'editor',
        computed: {
            design(): string {
                return decodeURIComponent(this.$route.params.id);
            },
            token(): string {
                return this.$store.state.userToken;
            },
            userId(): string {
                return this.$store.state.userId;
            },
            iframe(): HTMLIFrameElement {
                return document.getElementById("editor-frame") as HTMLIFrameElement;
            },
            mode(): string {
                return this.$route.path.split('/')[1];
            },
            editor(): CustomersCanvas.IframeApi.Editor {
                return (window as any)['editor'];
            },
            currentStage(): string {
                return this.$data.stage;
            },
            hiResLink(): string {
                if (this.$data.hiRes != undefined && this.$data.hiRes.length > 0) {
                    return this.$data.hiRes[0];
                } else {
                    return '';
                }
            },
            previewImg (): string {
                if (this.$data.proofImages != undefined && this.$data.proofImages.length > 0) {
                    return this.$data.proofImages[0];
                } else {
                    return '';
                }
            }
        },
        methods: {
            async loadEditor() {
                this.$data.stage = "edit";
                let editor = await IFrameApiService.loadEditor(this.iframe, this.design, this.mode, this.userId, this.token);
                this.$data.editorLoaded = true;
                (window as any)['editor'] = editor;
            },
            async getPreview() {
                this.$data.proofImages = await IFrameApiService.getPreviewImages(this.editor, 800, 800);
                this.$data.stage = "preview";
            },
            async saveProduct() {
                this.$data.hiRes = this.mode == 'states' && this.userId != 'default' && this.userId != 'masteruser'
                    ? await IFrameApiService.finishDesign(this.editor, 800, 800, this.design) 
                    : this.$data.hiRes = await IFrameApiService.finishDesign(this.editor, 800, 800);
                this.$data.stage = "finish";
            }
        },
        data() {
            return {
                stage: String,
                editorLoaded: Boolean,
                proofImages: {
                    type: Array as () => Array<string>
                },
                hiRes: {
                    type: Array as () => Array<string>
                }
            }
        },
        created() {
            this.$data.proofImages = [];
            this.$data.hiRes = [];
            this.$data.editorLoaded = false;
        },
        async mounted() {
            await this.loadEditor();
        }
    });
</script>
<style>
.area,
.fluid {
    position: relative;
}

.area {
    width: 940px;
    margin: 0 auto;
}

#editor-frame {
    display: block;
    border: 0;
}

#content {
    padding: 0px 0px 100px;
}

#wrapper {
    margin-top: 3em;
}

#saveAndNextButtonsWrapper {
    text-align: right;
    margin-top: 10px;
}

#approvePage {
    font: 14px Tahoma,Arial,Helvetica,sans-serif;
}

#approvePage .previewImg {
    max-width: 600px;
    max-height: 600px;
    box-shadow: #1FB6FF 0 0 3px;
    margin-top: 1em;
}

#approvePage .container-fluid {
    text-align: center;
}

#approvePage .agree {
    border: dashed 2px #1FB6FF;
    text-align: left;
    padding: 4px 16px 16px;
    margin-top: 15px;
}

#approvePage #approveButtonWrapper {
    text-align: right;
}

#finishOrderPage h3 {
    text-align: justify;
}

#finishOrderPage h1 {
    text-align: center;
}

#finishOrderPage .right {
    text-align: right;
}

.agreement-button {
    background: #1FB6FF;
    border-radius: 3px;
    border-style: none;
    width: 8em;
    height: 3em;
    color: white;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}
</style>