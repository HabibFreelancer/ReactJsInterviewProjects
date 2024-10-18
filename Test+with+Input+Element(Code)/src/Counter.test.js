import React from 'react';
import { render,screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

// test("Input should have 10 as initial value",()=>{
//     render(<Counter/>);
//     const inputEl = screen.getByTestId("input");
//     expect(inputEl.value).toBe("10");
// })

test("Entering value in input works",()=>{
    render(<Counter/>);
    const inputEl = screen.getByTestId("input");
    fireEvent.change(inputEl,{
        target:{
            value:11
        }
    })
    expect(inputEl.value).toBe("11");
})