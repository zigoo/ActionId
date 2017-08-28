
export function changeTool({toolId,text}) {
  return {
	type: 'changeToolType',
	toolId,
	text 
  }
}

export function deleteTool({toolId,worker}) {
  return {
  	type: 'DELETE_TOOL',
  	toolId,
  	worker
  }
}
