import React, { FC } from "react";
import type { LogTypes } from "../models/log";

export interface LogsListProps {
  logs: LogTypes[];
}

export const LogsList: FC<LogsListProps> = ({ logs }) => {
  return (
    <div style={{overflow: 'auto'}}>
      {logs.map((log) => (
        <>
          <p>{log.username}</p>
          <p>{log.date}</p>
        </>
      ))}
    </div>
  );
};
