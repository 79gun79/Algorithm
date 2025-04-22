function solution(sizes) {
     const chgSizes = sizes.map(([w, h]) => w < h ? [h, w] : [w, h])
    const maxW = Math.max(...chgSizes.map((v) => v[0]));
    const minW = Math.max(...chgSizes.map((v) => v[1]));
    return maxW * minW;
}