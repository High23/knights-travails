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

function displayConsoleMessage(routeArray) {
    console.log(`You made it in ${routeArray.length} moves! Here's your route:`)
    routeArray.forEach(vertex => {
        console.log(vertex)
    });
}

function knightMoves(startingPoint, endPoint) {
    if (startingPoint[0] === endPoint[0] && startingPoint[1] === endPoint[1]) {
        return console.log('The starting point must be different from the end point');
    } else if (startingPoint[0] < 0 || startingPoint[0] > 7 || startingPoint[1] < 0 || startingPoint[1] > 7) {
        return console.log('The starting point MUST be a square within the board');
    } else if (endPoint[0] < 0 || endPoint[0] > 7 || endPoint[1] < 0 || endPoint[1] > 7) {
        return console.log('The endpoint MUST be a square within the board');
    }
    let queue = [[startingPoint]];
    while (queue.length > 0) {
        const route = queue.shift();
        const previousPosition = route[route.length - 1];
        const movesFromCurrentPosition = createNextPossibleMoves(previousPosition);
        if (returnBoolIfEndpointInNextPossibleMoves(movesFromCurrentPosition, endPoint)) {
            route.push(endPoint)
            displayConsoleMessage(route)
            return
        }
        for (let move of movesFromCurrentPosition) {
            queue.push([...route, move])
        }
    }
    return
}
knightMoves([0, 0], [7, 4])