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

export interface ICell {
    index: number;
    value: 1;
  }

export interface IMainTask {
    activeIndices: Array<number>;
    cells: Array<ICell>;
  }
