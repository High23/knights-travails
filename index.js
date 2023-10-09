function createNextPossibleMoves(knightsLocation) {
    const knightsMoves = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
    ]
    let possibleMoves = []
    for (let i = 0; i < 8; i++) {
        if (knightsLocation[0] + knightsMoves[i][0] < 0 || knightsLocation[0] + knightsMoves[i][0] > 7) {
            continue;
        } else if (knightsLocation[1] + knightsMoves[i][1] < 0 || knightsLocation[1] + knightsMoves[i][1] > 7) {
            continue;
        }
        possibleMoves.push([knightsLocation[0] + knightsMoves[i][0], knightsLocation[1] + knightsMoves[i][1]])
    }
    return possibleMoves
}
