'use client'

import { useState } from "react";
import styles from './addform.module.css';
import Link from 'next/link';

const AddForm: React.FC = () => {
    return (
        <form action="/api/v1/post" method="POST" className="flex">
            <input className="form-control" type="text" name="task" />
            <button className="btn btn-primary" type="submit">ADD</button>
        </form>
    );
};

export default AddForm;