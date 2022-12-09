    var board = document.getElementById('boardinner');
    const renderBoard1 = (useLabels) =>{
        for (var i = 0; i < 8; ++i ){
            row.className = 'row'
            row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse';
            for (var j = 0; j < 8; ++j ){
                var row = document.createElement('DIV')
                square.className = 'square'
                square.style.backroundColor = j % 2 === 0 ? 'white' : 'black'
                row.appendChild(square)
            }
            board.appendChild(row)


        }
    }

