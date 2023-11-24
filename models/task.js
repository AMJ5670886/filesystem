const path = require('path');
const fs = require('fs');

const p = path.join(path.dirname(process.mainModule.filename),'data','tasks.json');

const getFiles = (cb) => {
    fs.readFile(p,(err,fileContent) =>{
        if(err)
        cb([]);
        else
        cb(JSON.parse(fileContent));
    })
}

class Task{
    constructor(name,id){
        this.name = name,
        this.id = id
    }

    save(){
        if(this.id){
            getFiles((files)=>{
                const index = files.findIndex(f=>f.id === this.id);
                const updatedFiles = [...files];
                updatedFiles[index] = this;
                fs.writeFile(p,(JSON.stringify(updatedFiles)),err =>{
                    console.log(err);
                })
            })
        }else{
            this.id = Math.random().toString();
            getFiles((files)=>{
                files.push(this);
                fs.writeFile(p,(JSON.stringify(files)),err =>{
                    console.log(err);
                })
            })
        }
    }

    static fetchAll(cb){
        getFiles(cb);
    }

    static findById(id,cb){
        getFiles((tasks)=>{
            let task = tasks.filter((t)=> t.id === id);
            cb(task);
        })
    }

    static deleteById(id){
        getFiles((tasks)=>{
            let newFiles = tasks.filter(t=>t.id !== id);
            fs.writeFile(p,(JSON.stringify(newFiles)),err =>{
                console.log(err);
            })
        })
    }
}

module.exports = Task;