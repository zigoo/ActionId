
export function changeTool({toolId,text}) {
  return {
	  type: 'changeToolType',
	  toolId,
	  text 
  }
}


export function deleteTool({toolId,worker}) {
  return {
  	type: 'delete_tool',
  	toolId,
  	worker
  }
}

export function changeMan({toolId,text}) {
  return {
    type: 'changeManufacturer',
    toolId,
    text 
  }
}

export function addTool({toolId,worker}) {
  return {
    type: 'add_tool',
    toolId,
    worker
  }
}
