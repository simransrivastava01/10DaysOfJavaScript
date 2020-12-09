function sides(literals, ...expressions) {
    var [A,P] = expressions;
    var root = Math.sqrt(P*P-16*A);
    var s1 = (P+root)/4;
    var s2 = (P-root)/4;
    
    return [s2,s1];
}