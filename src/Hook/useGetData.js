import * as $ from 'jquery'

const useGetData=async (getData)=>{
    let array=[];
    await $.get(getData,(data)=>{
        array=data;
    })
    return array;
}

export default useGetData