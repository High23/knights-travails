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

function returnBoolIfEndpointInNextPossibleMoves(currentPosition, endPoint) {
    return currentPosition.some(
        (possibleNextMove) => possibleNextMove[0] === endPoint[0] && possibleNextMove[1] === endPoint[1]
    );
}

function knightMoves(startingPoint, endPoint) {
    let queue = [[startingPoint]];
    while (queue.length > 0) {
        const route = queue.shift();
        const previousPosition = route[route.length - 1];
        const movesFromCurrentPosition = createNextPossibleMoves(previousPosition);
        if (returnBoolIfEndpointInNextPossibleMoves(movesFromCurrentPosition, endPoint)) {
            route.push(endPoint)
            return route
        }
    }
    return
}
console.log(knightMoves([0, 0], [2, 1]))