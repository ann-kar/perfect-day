export interface IHabit {
    name: string;
    description?:string;
    history: Array<number>;
    created_at: Date;
    notes: Array<string>
    priority: number;
    labels: Array<string>
}
