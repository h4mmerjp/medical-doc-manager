export interface ProcessedFile {
  id: string;
  name: string;
  status: "pending" | "processing" | "completed" | "error";
  progress: number;
  result?: any; // Difyからのレスポンスをそのまま保存
  error?: string;
}
