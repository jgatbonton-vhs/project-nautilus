'use client';
// OVERVIEW
// * Must support the four basic math operations (+, -, x , / ).
// refactor these out to separate file
// * Must have state management (using Redux or Zustand, etc).
// will probably use mobx
// * Should be as modular as possible, as you see fit.
// emphasize non coupled components
// generic Button component
// maybe a Buttons component

import { add, subtract, multiply, divide } from '@/utils/operations';
import { useState } from 'react';

interface ButtonProps {
    symbol: string;
    action?: any;
    // onClick?: (x: number, y: number) => number;
}

const Button = ({ symbol, action }: ButtonProps) => {
    return (
        <button
            className="flex items-center justify-center h-12 rounded-md bg-blue-600 font-medium text-lg text-neutral-50 shadow-sm outline-none hover:bg-blue-700"
            onClick={action}>
            {symbol}
        </button>
    );
};

export default function Home() {
    const [value, setValue] = useState(0);

    return (
        <main className="flex flex-1 flex-col justify-center min-h-screen">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-neutral-50">
                    Project Nautilus
                </h2>
                <p className="mt-2 text-center text-base text-neutral-200">
                    A simple react calculator for your everyday needs.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-neutral-850 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="grid p-2">
                        <div className="grid grid-cols-4 gap-2">
                            <div className="flex items-center justify-end rounded-md col-span-4 h-16 px-4 mb-4 bg-neutral-700 text-white text-xl">
                                {value}
                            </div>
                            <Button symbol="." action={setValue} />
                            <Button symbol="0" action={setValue} />
                            <Button symbol="1" action={setValue} />
                            <Button symbol="2" action={setValue} />
                            <Button symbol="3" action={setValue} />
                            <Button symbol="4" action={setValue} />
                            <Button symbol="5" action={setValue} />
                            <Button symbol="6" action={setValue} />
                            <Button symbol="7" action={setValue} />
                            <Button symbol="8" action={setValue} />
                            <Button symbol="9" action={setValue} />
                            <Button symbol="+" action={add(1, 1)} />
                            <Button symbol="-" action={subtract(1, 1)} />
                            <Button symbol="*" action={multiply(1, 1)} />
                            <Button symbol="/" action={divide(1, 1)} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
