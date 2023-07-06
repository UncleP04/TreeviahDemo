"use client"
import React, { useState } from 'react';
import { MdHome, MdLibraryBooks, MdEqualizer, MdExitToApp, MdAccountCircle, MdLiveHelp } from 'react-icons/md'
import { styled } from 'styled-components'


interface FooterMenu {
  id: number;
  icon: JSX.Element;
}


const Footerbar: React.FC = () => {
 

const FooterList: FooterMenu[] = [
  {
    id: 1,
    icon: <MdHome />
  },
  {
    id: 1,
    icon: <MdLibraryBooks />
  },
  {
    id: 1,
    icon: <MdEqualizer />
  },
  {
    id: 1,
    icon: <MdAccountCircle />
  }
  ]

  const ListFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
    box-shadow: 0px -5px 5px whitesmoke;
    gap: 40px;
    list-style: none;
    background-color: white;
    z-index: 10;
  `

  const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  `

  return (
    <Container>
              <ListFooter>
                {FooterList.map((footer) => (
                    <li key={footer.id}>
                        <span className="text-primary text-[20px]">{footer.icon}</span>
                    </li>
                ))}
                </ListFooter>
    </Container>
  );
};

export default Footerbar;
