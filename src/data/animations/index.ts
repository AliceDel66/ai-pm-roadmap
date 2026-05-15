import type { AnimationDefinition } from "../../components/animations/animationTypes";
import { agentFlow } from "./agentFlow";
import { aiImageGenerationFlow } from "./aiImageGenerationFlow";
import { apiCallFlow } from "./apiCallFlow";
import {
  chatbotVsAgent,
  searchVsRag,
  traditionalPmVsAiPm,
  traditionalPrdVsAiPrd,
} from "./compareAnimations";
import { commercializationFunnel } from "./commercializationFunnel";
import { customerServiceFlow } from "./customerServiceFlow";
import { promptFlow } from "./promptFlow";
import { ragFlow } from "./ragFlow";
import { requirementAnalysisFlow } from "./requirementAnalysisFlow";
import { streamingResponseFlow } from "./streamingResponseFlow";
import {
  aiProductLifecycleFlow,
  competitiveAnalysisFlow,
  costOptimizationFlow,
  databaseDesignFlow,
  growthRetentionFlow,
  logsMonitoringFlow,
  metricsAnalysisFlow,
  modelEvaluationFlow,
  portfolioBuildingFlow,
  prdWritingFlow,
  prototypeFlow,
  riskComplianceFlow,
} from "./supplementalAnimations";
import { userResearchFlow } from "./userResearchFlow";

export const animationRegistry: Record<string, AnimationDefinition> = {
  "rag-flow": ragFlow,
  "agent-flow": agentFlow,
  "prompt-flow": promptFlow,
  "user-research-flow": userResearchFlow,
  "requirement-analysis-flow": requirementAnalysisFlow,
  "api-call-flow": apiCallFlow,
  "streaming-response-flow": streamingResponseFlow,
  "ai-image-generation-flow": aiImageGenerationFlow,
  "customer-service-flow": customerServiceFlow,
  "commercialization-funnel": commercializationFunnel,
  "traditional-pm-vs-ai-pm": traditionalPmVsAiPm,
  "search-vs-rag": searchVsRag,
  "chatbot-vs-agent": chatbotVsAgent,
  "traditional-prd-vs-ai-prd": traditionalPrdVsAiPrd,
  "competitive-analysis-flow": competitiveAnalysisFlow,
  "prd-writing-flow": prdWritingFlow,
  "prototype-flow": prototypeFlow,
  "ai-product-lifecycle-flow": aiProductLifecycleFlow,
  "model-evaluation-flow": modelEvaluationFlow,
  "metrics-analysis-flow": metricsAnalysisFlow,
  "risk-compliance-flow": riskComplianceFlow,
  "cost-optimization-flow": costOptimizationFlow,
  "growth-retention-flow": growthRetentionFlow,
  "database-design-flow": databaseDesignFlow,
  "logs-monitoring-flow": logsMonitoringFlow,
  "portfolio-building-flow": portfolioBuildingFlow,
};

export const animationIds = Object.keys(animationRegistry).sort();
