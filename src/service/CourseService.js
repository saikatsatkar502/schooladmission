import Api from "../api/Api";

class CourseService{
    getCourses(){
        return Api.get("/COURSES");
    }
    addCourses(Courses){
        return Api.post("/COURSES",Courses);
    }
    deleteCourses(id){
        return Api.delete("/COURSES"+id);
    }
}

export default new CourseService();