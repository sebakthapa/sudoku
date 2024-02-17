"use client";
export interface boardContextType {
  boardData: string[];
  setBoardData: (data: any) => void;
  selectedCellLocation: [number, number];
  setSelectedCellLocation: (data: [number, number]) => void;
}

export interface updateBoardContextParams {
  data: string;
  location: [number, number];
}
