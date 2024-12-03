"use client"
import { useReducer } from 'react';
export default function Home() {
    
    const [state, dispatch] = useReducer(reducer, { sudoku: Array(81).fill(0) });
    const sudoku = randomSudoku();

    function reducer(state:any, action:any) {
        switch (action.type) {
            case 'change':
                const sudoku = state.sudoku.slice();
                sudoku[action.index] = action.value;
                return { sudoku };
            case 'ran':
                return { sudoku: randomSudoku() };
            default:
                return state;
        }}

    function randomSudoku() {
        const sudoku = Array(81).fill(0);
        for (let i = 0; i < 20; i++) {
            let index = Math.floor(Math.random() * 81);
            let value = Math.floor(Math.random() * 9) + 1;
            sudoku[index] = value;
        }
        for (let i = 0; i < 81; i++) {
            if (sudoku[i] === 0) {
                for (let value = 1; value <= 9; value++) {
                    if (isPossible(sudoku, i, value)) {
                        sudoku[i] = value;
                        break;
                    }
                }
            }
        }
        return sudoku;

        
    }

    function isPossible(sudoku:any, index:any, value:any) {
        const row = Math.floor(index / 9);
        const col = index % 9;
        for (let i = 0; i < 9; i++) {
            if (sudoku[row * 9 + i] === value) {
                return false;
            }
            if (sudoku[i * 9 + col] === value) {
                return false;
            }
        }
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (sudoku[i * 9 + j] === value) {
                    return false;
                }
            }
        }
        return true;
    }

    
    

            
    return(
        <div>
            <div className="grid grid-cols-9 w-fit gap-2">
            
                {state.sudoku.map((value:any, index:any) => (
                    <input
                        key={index}
                        className="w-8 h-8 text-center text-black"
                        value={value || ''}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (isNaN(value) || value < 1 || value > 9) {
                                dispatch({ type: 'change', index, value: 0 });
                            } else {
                                dispatch({ type: 'change', index, value });
                            }
                        }
                    }
                    />
                ))}
            
            </div>
            <button onClick={() => dispatch({ type: 'ran' })}>Random</button>
            

        </div>

    );
 
    



}