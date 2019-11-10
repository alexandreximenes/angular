export class CoursesService{
   
    private _courses : any = [] ;
    private course?: string = ""
    
    constructor(){
        this._courses = ["courses1", "courses2", "courses3", "courses4", "courses5", "courses6"];
    }
    public get courses(){
        return this._courses;
    }

    public set add(course: string){
        this._courses.push(course);
    }
   
}