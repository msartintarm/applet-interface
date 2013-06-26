var case_loaded = false;
var hardware_loaded = false;

function case_describe(case_num) {

    if(case_loaded === true) return;

    var case_title = document.getElementById("case_title");
    var case_describe = document.getElementById("case_describe");

    switch(case_num) {
    case 1:
	case_title.innerHTML = "Instruction Set Generation.";
	case_describe.innerHTML = "\
Generating custom instruction candidates from an application is the process \
of finding subgraphs within an intermediate representation of the program. </br>\
In ILP, the problem is to determine the convex set of instructions \
inside a basic block and maximize the expected latency reduction.";
	break;
    case 2:
	case_title.innerHTML = "Data-Center Service Allocation.";
	case_describe.innerHTML = "\
Data-center resource managers are centralized software components which \
manage the execution of a large number of services. Co-locating multiple services on a \
machine could degrade performance, and hence it is critical for the resource manager to \
utilize information upon services and machines in effectively allocating machine resources. </br>\
In ILP, the problem is to statically determine the best co-locations of services on servers \
for resource requirements and service-level agreements to be satisfied.";
	break;
    case 3:
	case_title.innerHTML = "Spatial Architecture Scheduling.";
	case_describe.innerHTML = "\
Data-center resource managers are centralized software components which \
manage the execution of a large number of services. Co-locating multiple services on a \
machine could degrade performance, and hence it is critical for the resource manager to \
utilize information upon services and machines in effectively allocating machine resources. </br>\
In ILP, the problem is to statically determine the best co-locations of services on servers \
for resource requirements and service-level agreements to be satisfied.";
	break;
    case 4:
	case_title.innerHTML = "Resource Allocation in Tiled Architectures.";
	case_describe.innerHTML = "\
Given spatially distributed hardware where routing of messages is not exposed to software, \
communication patterns between spatial components can still be used to derive \
the optimal hardware design. <br/>\
The problem solved is, given a limited resource budget, to determine where memory controllers \
should be placed on-chip, and where to place network links and buffers which interconnect \
processors and memory controllers. <br/>In order to come up with a performance-maximizing \
objective, the combined problem must be reformulated to keep the target linear. This has \
added benefits of improving the  degree of  attained optimality, as well as the solver time.";
	break;
    default: break;
    }
}

function case_load(case_num) {
    
    // block description from changing on mouseover
    if(case_loaded === false) {
	case_describe(case_num);
	case_loaded = true;	
    }

    var case_content = document.getElementById("case_content");
    var describe = document.getElementById("case_describe");
    describe.innerHTML = "";

    switch(case_num) {
    case 3:
	// Hardware graphs. Here, set up a table with mouseover.
	describe.innerHTML = "Select from one of four spatial architectures.";
	var hw_table = document.createElement("table");
	hw_table.innerHTML = "\
<thead><tr>\
  <th><button onmouseover=\"hardware_describe(1)\" \
              onclick=\"hardware_load(1)\">Simple</button></th>\
  <th><button onmouseover=\"hardware_describe(2)\" \
	      onclick=\"hardware_load(2)\">DySER</button></th>\
  <th><button onmouseover=\"hardware_describe(3)\" \
	      onclick=\"hardware_load(3)\">PLUG</button></th>\
  <th><button onmouseover=\"hardware_describe(4)\" \
	      onclick=\"hardware_load(4)\">TRIPS</button></th>\
</tr></thead>";
	var hw_title = document.createElement("h3");
	var hw_describe = document.createElement("p");
	hw_title.id = "hardware_title";
	hw_describe.id = "hardware_describe";
	hw_table.style.width = "100%";
	case_content.appendChild(hw_table);
	case_content.appendChild(hw_title);
	case_content.appendChild(hw_describe);
	break;
    default: break;
    }
}

function hardware_describe(hardware_num) {

    if(hardware_loaded === true) return;

    var hw_title = document.getElementById("hardware_title");
    var hw_describe = document.getElementById("hardware_describe");
    switch(hardware_num) {
    case 1:
	hw_title.innerHTML = "Simple Architecture";
	hw_describe.innerHTML = "A contrived architecture.";
	break;
    case 2:
	hw_title.innerHTML = "DySER Architecture";
	hw_describe.innerHTML = "An accelerator.";
	break;
    case 3:
	hw_title.innerHTML = "PLUG Architecture";
	hw_describe.innerHTML = "A weird architecture.";
	break;
    case 4:
	hw_title.innerHTML = "TRIPS Architecture";
	hw_describe.innerHTML = "An intended general-purpose architecture.";
	break;
    default: break;
    }
}

function hardware_load(hardware_num) {

    if(hardware_loaded === false) {
	hardware_describe(hardware_num);
	hardware_loaded = true;	
    }

    var describe = document.getElementById("case_describe");
    describe.innerHTML = "";

    var hw_title = document.getElementById("hardware_title");
    var hw_describe = document.getElementById("hardware_describe");
    switch(hardware_num) {
    case 1:
	hw_describe.innerHTML = "One hardware graph, and two provided software DAGs.";
	break;
    case 2:
	hw_describe.innerHTML = "Two hardware graphs, and three provided software DAGs.";
	break;
    case 3:
	hw_describe.innerHTML = "Three hardware graphs, and four provided software DAGs.";
	break;
    case 4:
	hw_describe.innerHTML = "Four hardware graphs, and five provided software DAGs.";
	break;
    default: break;
    }
}
