export async function sendFileToDify(file: File): Promise<any> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("/api/process", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Dify API error:", error);
    throw error;
  }
}
