export class ProjectDto {

    constructor(id: Number, preview: string, snapshot: string, userId: string, configId: string) {
        this.id = id;
        this.preview = preview;
        this.snapshot = snapshot;
        this.userId = userId;
        this.configId = configId;
    }

    public id: Number;

    public preview: string;

    public snapshot: string;

    public userId: string;

    public configId: string;
}