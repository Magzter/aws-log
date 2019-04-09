import { IDictionary } from "common-types";
import { loggingApi } from "./logger/logging-api";
import {
  initSeverity,
  setCorrelationId,
  clearState,
  contextApi
} from "./logger/state";
import { createCorrelationId } from "./logger/correlationId";
export { setSeverity, setContext, getState } from "./logger/state";

export const logLevelLookup: IDictionary<number> = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

export function logger() {
  clearState();
  initSeverity();
  setCorrelationId(createCorrelationId());

  return { ...loggingApi, ...contextApi };
}
