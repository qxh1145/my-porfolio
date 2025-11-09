import { MdArrowOutward } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { GoDotFill } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import usePageStore from "../../store/pageStore"; // Import the store


const Navspace = () => {
    const { page, setPage } = usePageStore();

    const handleSetPage = (i) => {
        if (i == 1) {
            setPage(1)
        } else if (i == 2) {
            setPage(2)

        } else if (i == 3) {
            setPage(3)
        } else {
            setPage(4)

        }
    }
    return (
        <Nav defaultActiveKey="/home" className="flex-column m-3 gap-4">
            <div className="themed-text" onClick={() => handleSetPage(1)}>  {page == 1 ? <GoDotFill /> :<> <GoArrowUpRight /> Home</>}</div>
            <div className="themed-text" onClick={() => handleSetPage(2)}> {page == 2 ? <GoDotFill /> : <> <GoArrowUpRight /> Project</>}</div>
            <div className="themed-text" onClick={() => handleSetPage(3)}> {page == 3 ? <GoDotFill /> : <> <GoArrowUpRight /> Info</>}</div>
            <div className="themed-text" onClick={() => handleSetPage(4)}> {page == 4 ? <GoDotFill /> : <> <GoArrowUpRight /> Skill</>}</div>
        </Nav>
    )
}

export default Navspace