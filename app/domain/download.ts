export const download = {
  latest: async (listener?: (progress: { error: boolean }) => void) => {
    try {
      const response = await fetch("/api/download/latest");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.downloadUrl) {
        window.location.href = data.downloadUrl;
      } else {
        throw new Error("Download URL not received from API.");
      }
    } catch (err: any) {
      console.error("Download error:", err);
      listener?.({ error: true });
    } finally {
      listener?.({ error: false });
    }
  },
};
