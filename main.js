import { LinkedList } from "./LinkedListFile.js";


const list = new LinkedList();



list.append("hamster");
list.append("dog");
list.prepend("parrot");
list.append("turtle");
list.append("cat");
list.prepend("snake");

console.log(list.toString());
list.insertAt("panda",11);
console.log(list.toString());