export const DUMMY = "DUMMY";

export function getDummyAction(fetchedResults) {	
  return {	
    type: DUMMY,
    payload: fetchedResults	
  };	
}
