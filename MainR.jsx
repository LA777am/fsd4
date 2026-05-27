import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../components/Home"
import Settings from "../components/Settings"
import ProductList from "../components/ProductList"
import Todo from "../components/Todo"
import ShowHide from "../components/ShowHide"
import OnChange from "../components/OnChange"
import CountLike from "../components/CountLike"
import SecondsCount from "../components/SecondsCount"
import CounterHook from "../components/CounterHook"
import ImageHook from "../components/ImageHook"

export default function MainR(){
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path='/home' element ={<Home/>}></Route>
            <Route path='/settings' element ={<Settings/>}></Route>
            <Route path='/product' element ={<ProductList/>}></Route>
            <Route path='/effects/todo' element={<Todo />}></Route>
            <Route path='/effects/showhide' element={<ShowHide />}></Route>
            <Route path='/effects/onchange' element={<OnChange />}></Route>
            <Route path='/hooks/counter' element={<CounterHook />}></Route>
            <Route path='/hooks/image' element={<ImageHook />}></Route>
            <Route path='/count/like' element={<CountLike />}></Route>
            <Route path='/count/seconds' element={<SecondsCount />}></Route>
        </Routes>
    )
}