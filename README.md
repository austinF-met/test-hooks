## Hooks + useMemo
Why is useMemo used so much in custom hooks and why is it often wrapping a custom hook entirely? The reason is that the calling component, if re-rendered for any reason, will re-call the hook. If the hook is being used to transform a large array, then the array will be re-processed each time the component re-renders. 

This means that if component A changes for some non-hook related reason the hook is still re-run in its entirety. 

So any hook being used expressly for a large data transform will need to be memoized based on its inputs.

