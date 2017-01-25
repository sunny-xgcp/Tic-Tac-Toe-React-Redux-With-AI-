import * as React from 'react'

import {mount, render, shallow} from 'enzyme'
import {expect} from "chai"

import {MainBoard,Board} from "./Board";
import {Square} from "./Square";
import {createShallow,createMount} from "../../../../../TestWrapper";






describe("<MainBoard/>",()=>{

const wrapper = createMount(<Board/>);
    it("Renders nine squares",()=>{

        
        expect(wrapper.find(".square")).to.have.length(9);

    });

    it("Contains no values in squares initially",()=>{

      
        wrapper.find(".square").forEach((wrp)=>{expect(wrp.text()).to.contains("")});

    });

    it("clicking on first box gives it an X",()=>{

      
        wrapper.find(Square).at(0).simulate('click');
        expect(wrapper.find(Square).at(0).text()).to.contains("X");

    });

     it("clicking on first box creates a response from AI",()=>{

        var counter=0;
       wrapper.find(Square).forEach((wrp)=>{
          
           if(wrp.text()==="O"){
               
                counter++;
           }

       })
        expect(counter).to.equal(1);

    });



});

