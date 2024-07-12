import { createContext, useContext, useState } from "react";

export const StepperContext=createContext( {auditData: "", setAuditData: null });
export function UseContextProvider({ children }) {
    const [auditData, setAuditData] = useState("");
  
    return (
      <StepperContext.Provider value={{ auditData, setAuditData }}>
        {children}
      </StepperContext.Provider>
    );
  }
  export function useStepperContext() {
    const { auditData, setAuditData } = useContext(StepperContext);
  
    return { auditData, setAuditData };
  }



/*creating a StepperContext using React's createContext API. This context can be used to manage 
and share state across components within your React application, especially useful for scenarios like
 multi-step forms or wizards where multiple components need access to the current step or other shared state.   
 manhbch no93d nsta3ml fi props ou redux khatr chno93d n3aytlha mn component llekher w ta3abni  <3 */