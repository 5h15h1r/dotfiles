//SPDX-License-Identifier: UNLICENSED

pragma soldity 0.8.18;

contract demo{
    uint number;
    function set(uint _number) public{
        number = _number;
    }
    function getter() public view returns(uint){
        return number;
    }
}