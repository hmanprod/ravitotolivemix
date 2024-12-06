import { DownloadLog } from '../types/DownloadLog';
import { sendWebhook } from './webhookService';

class DownloadLogger {
  private readonly STORAGE_KEY = 'mibuzz_download_logs';

  private getStoredLogs(): DownloadLog[] {
    const storedLogs = localStorage.getItem(this.STORAGE_KEY);
    return storedLogs ? JSON.parse(storedLogs) : [];
  }

  private saveLogs(logs: DownloadLog[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(logs));
  }

  async logDownload(trackId: string, trackTitle: string): Promise<void> {
    const logs = this.getStoredLogs();
    const timestamp = new Date().toISOString();
    
    const newLog: DownloadLog = {
      trackId,
      trackTitle,
      downloadedAt: timestamp,
    };
    
    // Save to local storage
    logs.push(newLog);
    this.saveLogs(logs);
    
    // Send to webhook
    await sendWebhook({
      event: 'download',
      data: {
        ...newLog,
        downloadCount: this.getDownloadCount(trackId),
      }
    });
  }

  getDownloadCount(trackId: string): number {
    const logs = this.getStoredLogs();
    return logs.filter(log => log.trackId === trackId).length;
  }

  getAllLogs(): DownloadLog[] {
    return this.getStoredLogs();
  }
}

export const downloadLogger = new DownloadLogger();