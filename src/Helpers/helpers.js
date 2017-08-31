export function focusInCurrentTarget({ relatedTarget, currentTarget }) {
  if (relatedTarget === null) return false;
  
  var node = relatedTarget.parentNode;
        
  while (node !== null) {
    if (node === currentTarget) return true;
    node = node.parentNode;
  }

  return false;
} 