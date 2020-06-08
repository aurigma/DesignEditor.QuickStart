<template>
    <div id="wrapper" style="height:100%; margin-top:60px">
        <script id="scriptLoader" type="module">
            import moduleLoader from "https://localhost:5001/ui-framework/4.8.0/moduleLoader.js";
            window.moduleLoader = moduleLoader;
            document.getElementById("scriptLoader").dispatchEvent(new Event('load'));
        </script>
        <div id="auwizard-parent" style="height:90%">
    </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { UiFrameworkInitializer } from '../code/UiFrameworkInitializer';
import { ProjectDto } from '../code/models/ProjectDto';
import { BackendService } from '../code/BackendService';
import { ProductDto } from '../code/models/ProductDto';
    export default Vue.extend({
        name: 'ui-framework-editor',
        computed: {
            configId(): string {
                if (this.hasProducts) {
                    if (this.mode == 'products') {
                        return decodeURIComponent(this.$route.params.id);
                    } else {
                        let projectId = Number.parseInt(this.$route.params.id);
                        return decodeURIComponent((this.$store.state.projects as ProjectDto[]).filter(project => project.id == projectId)[0].configId);
                    }
                } else {
                    return "";
                }
            },
            token(): string {
                return this.$store.state.userToken;
            },
            userId(): string {
                return this.$store.state.userId;
            },
            mode(): string {
                return this.$route.path.split('/')[1];
            },
            hasProducts(): boolean {
                return (this.$store.state.products as ProductDto[]).length > 0;
            },
            existingProduct(): any {
                if (this.hasProducts) {
                    if (this.mode == 'products') {
                        return null;
                    } else {
                        return {
                            snapshot: (this.$store.state.projects as ProjectDto[]).filter(project => project.id == Number.parseInt(this.$route.params.id))[0].snapshot
                        }
                    }
                } else {
                    return "";
                }
            }
        },
        methods: {
            async loadEditor() {
                const user = {
                    id: this.userId, 
                    tokenId: this.token
                };

                let script = document.getElementById("scriptLoader") as HTMLElement;
                script.onload = async() => {
                    if ((window as any).moduleLoader != undefined && (window as any).moduleLoader != null) {

                        let initializer: UiFrameworkInitializer = (window as any).editorInitializer;

                        if (initializer == undefined || initializer == null) {
                            initializer = new UiFrameworkInitializer((window as any).moduleLoader);
                            await initializer.init();
                            (window as any).editorInitializer = initializer;
                        }

                        let editorMode = this.mode == 'products' ? 'create' : 'restore';
                        let ecommerce = await initializer.loadEditor("auwizard-parent", this.configId, 1, this.existingProduct, user);

                        ecommerce.cart.onSubmitting.subscribe(async () => {
                            let currentProduct = ecommerce.cart.lineItems.current;

                            if (editorMode == 'create') {
                                let project = new ProjectDto(0, currentProduct.data.preview as string, currentProduct.data.snapshot as string, user.id, this.configId);
                                await BackendService.saveProject(project);
                            } else {
                                let projectId = Number.parseInt(this.$route.params.id);
                                let project = new ProjectDto(projectId, currentProduct.data.preview as string, currentProduct.data.snapshot as string, user.id, this.configId);
                                await BackendService.updateProject(project);
                            }

                           this.$router.push('/projects');
                        });
                    }
                }
            }
        },
        beforeMount() {
            this.$store.dispatch('SET_PROJECTS');
            this.$store.dispatch('SET_PRODUCTS');
        },
        async mounted() {
            await this.loadEditor();
        }
    });
</script>