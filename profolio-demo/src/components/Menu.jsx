import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { menuSlide } from "./anim";
import { navItems } from "../assets/data";
import {Curve} from "./Curve";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  
  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>

      <AnimatePresence mode="wait">
        {menuOpened && <Nav onSectionChange={onSectionChange}/>}
      </AnimatePresence>
    </>
      
    );
      
  }

  const Nav = (props) => {
    const {onSectionChange} = props;

    const menuClassName=`h-screen fixed right-0 top-0`;
    const nav2 = `box-border h-full p-24 flex flex-col justify-between mt-20`;
    const itemsClassName = `flex items-start justify-center flex-col p-8`

    return (
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={menuClassName}
        style={{ backgroundColor: 'rgb(255, 255, 255)'}}
      >
        <div className={nav2}>
        <div className={itemsClassName}>
           {navItems.map((nav, index) => (
            <MenuButton key={index} label={`${nav.title}` } onClick={() => onSectionChange(index)} />
           ))}
        </div>
        </div>
        <Curve />
      </motion.div>
    );
  }


  const MenuButton = (props) => {
    const { label, onClick } = props;
    return (
      <button
        onClick={onClick}
        className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors p-8"
      >
        {label}
      </button>
    );
  };