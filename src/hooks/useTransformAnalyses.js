const useTransformAnalyses = (analyses) => {
    console.log('hook gets called')
    return analyses.map((analysis) => (analysis));
}

export default useTransformAnalyses;