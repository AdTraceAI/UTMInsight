interface UTMParams {
  source: string;
  medium: string;
  campaign: string;
  term?: string;
  content?: string;
}

export class UTMInsight {
  private static instance: UTMInsight;
  private utmParams: UTMParams | null = null;

  private constructor() {
    this.captureUTMParams();
    this.trackPageView();
  }

  public static getInstance(): UTMInsight {
    if (!UTMInsight.instance) {
      UTMInsight.instance = new UTMInsight();
    }
    return UTMInsight.instance;
  }

  private captureUTMParams(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaign = urlParams.get("utm_campaign");

    if (utmSource && utmMedium && utmCampaign) {
      this.utmParams = {
        source: utmSource,
        medium: utmMedium,
        campaign: utmCampaign,
        term: urlParams.get("utm_term") || undefined,
        content: urlParams.get("utm_content") || undefined,
      };
      this.storeUTMParams();
    }
  }

  private storeUTMParams(): void {
    if (this.utmParams) {
      localStorage.setItem("utminsight_params", JSON.stringify(this.utmParams));
    }
  }

  private trackPageView(): void {
    const storedParams = localStorage.getItem("utminsight_params");
    const params = storedParams ? JSON.parse(storedParams) : null;

    // Send pageview data to your analytics endpoint
    this.sendToAnalytics("pageview", {
      url: window.location.href,
      utmParams: params,
    });
  }

  public trackConversion(conversionType: string, value?: number): void {
    const storedParams = localStorage.getItem("utminsight_params");
    const params = storedParams ? JSON.parse(storedParams) : null;

    // Send conversion data to your analytics endpoint
    this.sendToAnalytics("conversion", {
      type: conversionType,
      value: value,
      utmParams: params,
    });
  }

  private sendToAnalytics(eventType: string, data: any): void {
    // Replace this with your actual analytics endpoint
    const analyticsEndpoint = "https://your-analytics-api.com/collect";

    fetch(analyticsEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventType,
        data,
        timestamp: new Date().toISOString(),
      }),
    }).catch((error) => console.error("Error sending analytics:", error));
  }
}

// Make UTMInsight available globally
(window as any).UTMInsight = UTMInsight.getInstance();
