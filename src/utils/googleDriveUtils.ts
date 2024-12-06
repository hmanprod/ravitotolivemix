export function getDirectDownloadUrl(shareUrl: string): string {
  const fileId = shareUrl.match(/\/d\/(.+?)\/view/)?.[1];
  if (!fileId) throw new Error('Invalid Google Drive URL');
  // Use an alternative method to stream audio
  return `https://docs.google.com/uc?export=download&id=${fileId}`;
}