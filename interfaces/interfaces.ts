export interface IHabit {
    id: number;
    name: string;
    description?:string;
    history: Array<number>;
    created_at: string;
    notes: Array<string>
    priority: number;
    labels: Array<string>
}
