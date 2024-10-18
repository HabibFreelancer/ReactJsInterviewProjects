import React from 'react';
import { render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test("Initial value of counter should be 0",()=>{
    render(<Counter/>);
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl).toBeInTheDocument();
})

test("On click, it should increment counter by 1",()=>{
    render(<Counter/>);
    const btnEl = screen.getByTestId("btn");
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl.textContent).toBe("0");
    userEvent.click(btnEl);
    expect(counterEl.textContent).toBe("1");
})