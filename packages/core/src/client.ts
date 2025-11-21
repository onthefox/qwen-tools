import axios, { AxiosInstance } from 'axios';

/**
 * Qwen3-Coder Client Configuration
 * Uses /auth endpoint for temporary token instead of raw API key
 */
interface QwenClientConfig {
  apiKey: string;
  model?: string;
  baseUrl?: string;
  timeout?: number;
}

interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
}

interface AnalysisRequest {
  code: string;
  language: string;
  task: string;
}

interface AnalysisResponse {
  analysis: string;
  suggestions: string[];
  severity: 'low' | 'medium' | 'high';
}

/**
 * Qwen3-Coder Client
 * Handles authentication via /auth endpoint and code analysis/generation
 */
export class Qwen3CoderClient {
  private apiKey: string;
  private model: string;
  private baseUrl: string;
  private client: AxiosInstance;
  private accessToken: string | null = null;
  private tokenExpiry: number | null = null;

  constructor(config: QwenClientConfig) {
    this.apiKey = config.apiKey;
    this.model = config.model || 'qwen-3-coder';
    this.baseUrl = config.baseUrl || 'https://api.qwen.ai/v1';

    this.client = axios.create({
      baseURL: this.baseUrl,
      timeout: config.timeout || 30000,
    });
  }

  /**
   * Authenticate using /auth endpoint
   * Returns temporary access token instead of using raw API key
   */
  private async authenticate(): Promise<string> {
    // Check if we have a valid cached token
    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    try {
      const response = await this.client.post<AuthResponse>('/auth/token', {
        api_key: this.apiKey,
      });

      this.accessToken = response.data.access_token;
      // Set expiry to 5 minutes before actual expiry
      this.tokenExpiry = Date.now() + (response.data.expires_in - 300) * 1000;

      return this.accessToken;
    } catch (error) {
      throw new Error(`Qwen3-Coder authentication failed: ${error}`);
    }
  }

  /**
   * Analyze code using Qwen3-Coder
   * Supports code analysis, pattern matching, and suggestions
   */
  async analyzeCode(request: AnalysisRequest): Promise<AnalysisResponse> {
    const token = await this.authenticate();

    try {
      const response = await this.client.post<AnalysisResponse>(
        '/code/analyze',
        {
          code: request.code,
          language: request.language,
          task: request.task,
          model: this.model,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(`Code analysis failed: ${error}`);
    }
  }

  /**
   * Generate code using Qwen3-Coder
   */
  async generateCode(prompt: string, language: string = 'typescript'): Promise<string> {
    const token = await this.authenticate();

    try {
      const response = await this.client.post<{ code: string }>(
        '/code/generate',
        {
          prompt,
          language,
          model: this.model,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.code;
    } catch (error) {
      throw new Error(`Code generation failed: ${error}`);
    }
  }

  /**
   * Refactor code using Qwen3-Coder
   */
  async refactorCode(code: string, objective: string): Promise<string> {
    const token = await this.authenticate();

    try {
      const response = await this.client.post<{ refactored_code: string }>(
        '/code/refactor',
        {
          code,
          objective,
          model: this.model,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.refactored_code;
    } catch (error) {
      throw new Error(`Code refactoring failed: ${error}`);
    }
  }
}

export default Qwen3CoderClient;
