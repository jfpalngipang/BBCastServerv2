/********************************************
BBCast mainly uses EDF or Earliest Deadline 
First priority algorithm.
********************************************/
function getPrio(time_in, time_out ){
    
    var prio = time_out - time_in;
    
    return prio;
}