// vh-watch

const updateVariable = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty( "--vh", `${vh}px` );
}

const resizeWatch = () => {
  window.addEventListener( "resize", updateVariable );
}

const vhWatcher = () => {
  updateVariable();
  resizeWatch();
}

export const watchVh = vhWatcher;
export const vhUpdate = updateVariable;
export const vhResizeWatch = resizeWatch;