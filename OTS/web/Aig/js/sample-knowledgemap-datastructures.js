var Aig = Aig || {};
Aig.sampleDataStructures=[{
		"id" : "data-structures",
		"text" : "Data Structure",
		"description" : "Data Structures concepts",
		"nodes" : [{
				"id" : "array",
				"parentNodeId" : "data-structures",
				"text" : "Array",
				"icon" : "",
				"selectedIcon" : "",
				"color" : "#000000",
				"backColor" : "#FFFFFF",
				"href" : "",
				"selectable" : true,
				"state" : {
					"checked" : false,
					"disabled" : false,
					"expanded" : false,
					"selected" : false
				},
				"tags" : [],
				"nodes" : [],
				"relationship" : {
					"id" : "",
					"name" : ""
				},
				"behaviorDescription" : "",
				"attributes" : [{
						"id" : "",
						"name" : "index",
						"type" : "integer",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "buffer",
						"type" : "array",
						"attributeValue" : ""
					}
				],
				"functions" : [{
						"id" : "",
						"name" : "Array(size)",
						"purpose" : "create instance and assign the internal buffer size",
						"preCondition" : "it is not null",
						"postCondition" : "internal buffer size set",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public Array(size){\n   buffer= new object[size];\n}",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "Insert",
						"purpose" : "insert item into available index ",
						"preCondition" : "item is not null",
						"postCondition" : "item inserted into to available index position",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public Insert(T item,index){\n\n buffer[i] = buffer[i-1];\n\nbuffer[index] = item;\n}",
						"timeComplexity" : "2"
					}, {
						"id" : "",
						"name" : "Delete",
						"purpose" : "delete item at a specific index",
						"preCondition" : "item is not null",
						"postCondition" : "item deleted at a specific index",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public void Delete(index){\n \n  for(int i = index; i < buffer.length -1; i++){\n      buffer[i] = buffer[i + 1];\n   }\n}",
						"timeComplexity" : "2"
					}, {
						"id" : "",
						"name" : "Length",
						"purpose" : "return the length ",
						"preCondition" : "it is not null",
						"postCondition" : "length of returned",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "int Length(){\n   return buffer.length\n}",
						"timeComplexity" : "1"
					}
				],
				"applications" : [{
						"id" : "",
						"description" : "design and implement a system that maintain student list so that any record can be access randomly"
					}, {
						"id" : "",
						"description" : "build a software module to maintain a list of teachers. The specification for the module is as follows (1)  the is shall be build dynamically. (2) data shall be easy to find, preferably O(1). (3) the user does not care about any order statistics such as minimum or maximum or median\n\n"
					}
				],
				"behaviourDescriptions" : [{
						"id" : "",
						"description" : "stores a fixed-size sequential collection of elements of the same type"
					}, {
						"id" : "",
						"description" : " data can be  located at any index position"
					}, {
						"id" : "",
						"description" : "it is dynamic and  created on the heap"
					}, {
						"id" : "",
						"description" : "length is fixed"
					}, {
						"id" : "",
						"description" : "constant of time accessing O(1) for reading and writing."
					}
				],
				"relationshipid" : 1,
				"relationshipname" : "",
				"behaviourdescription" : "is a linear data structure"
			}, {
				"id" : "linkedList",
				"parentNodeId" : "data-structures",
				"text" : "Linked List",
				"icon" : "",
				"selectedIcon" : "",
				"color" : "#000000",
				"backColor" : "#FFFFFF",
				"href" : "",
				"selectable" : true,
				"state" : {
					"checked" : false,
					"disabled" : false,
					"expanded" : false,
					"selected" : false
				},
				"tags" : [],
				"nodes" : [],
				"relationship" : {
					"id" : "",
					"name" : ""
				},
				"behaviorDescription" : "",
				"attributes" : [{
						"id" : "",
						"name" : "start",
						"type" : "Node",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "end",
						"type" : "Node",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "size",
						"type" : "integer",
						"attributeValue" : ""
					}
				],
				"functions" : [{
						"id" : "",
						"name" : "LinkedList",
						"purpose" : "create instance and assign inital values for start,end and size",
						"preCondition" : "start and end is not null",
						"postCondition" : "instance created",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : " public LinkedList()\n {\n        start = null;\n        end = null;\n        size = 0;\n}",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "IsEmpty",
						"purpose" : "return true iff it has items otherwise false",
						"preCondition" : "it is not null",
						"postCondition" : "returned true or false",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public boolean IsEmpty() {\n        return start == null;\n }",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "Size",
						"purpose" : "return the size of the list",
						"preCondition" : "it is not null",
						"postCondition" : "size of the list returned",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public int Size(){\n        return size;\n}  ",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "InsertAtStart",
						"purpose" : "insert item at the start of the list",
						"preCondition" : "item is not null",
						"postCondition" : "item inserted at the first postion of the list",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public void insertAtStart(int val) {\n        Node nptr = new Node(val, null);    \n        size++ ;    \n        if(start == null) \n        {\n            start = nptr;\n            end = start;\n        }\n        else \n        {\n            nptr.setLink(start);\n            start = nptr;\n        }\n}",
						"timeComplexity" : "2"
					}, {
						"id" : "",
						"name" : "InsertAtEnd",
						"purpose" : "insert item at the end of the list",
						"preCondition" : "item is not null",
						"postCondition" : "item inserted at ",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public void insertAtEnd(int val) {\n        Node nptr = new Node(val,null);    \n        size++ ;    \n        if(start == null) \n        {\n            start = nptr;\n            end = start;\n        }\n        else \n        {\n            end.setLink(nptr);\n            end = nptr;\n        }\n    }",
						"timeComplexity" : "2"
					}, {
						"id" : "",
						"name" : "InsertAtPosition",
						"purpose" : "insert an item at a specific position ",
						"preCondition" : "position is not less than zero and item is not null",
						"postCondition" : "item inserted at a specific position",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public void InsertAtPosition(int val , int pos){\n        Node nptr = new Node(val, null);                \n        Node ptr = start;\n        pos = pos - 1 ;\n        for (int i = 1; i < size; i++) \n        {\n            if (i == pos) \n            {\n                Node tmp = ptr.getLink() ;\n                ptr.setLink(nptr);\n                nptr.setLink(tmp);\n                break;\n            }\n            ptr = ptr.getLink();\n        }\n        size++ ;\n    }",
						"timeComplexity" : "2"
					}, {
						"id" : "",
						"name" : "DeleteAtPosition",
						"purpose" : "delete at a specific position",
						"preCondition" : "position is not less than zero",
						"postCondition" : "",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public void DeleteAtPosition(int pos){        \n        if (pos == 1) \n        {\n            start = start.getLink();\n            size--; \n            return ;\n        }\n        if (pos == size) \n        {\n            Node s = start;\n            Node t = start;\n            while (s != end)\n            {\n                t = s;\n                s = s.getLink();\n            }\n            end = t;\n            end.setLink(null);\n            size --;\n            return;\n        }\n        Node ptr = start;\n        pos = pos - 1 ;\n        for (int i = 1; i < size - 1; i++) \n        {\n            if (i == pos) \n            {\n                Node tmp = ptr.getLink();\n                tmp = tmp.getLink();\n                ptr.setLink(tmp);\n                break;\n            }\n            ptr = ptr.getLink();\n        }\n        size-- ;\n    }    ",
						"timeComplexity" : "2"
					}
				],
				"applications" : [{
						"id" : "",
						"description" : "build a system to maintain files of patients. The given specification of the systems are as follows: (1) the size of the file is unknown. (2) the entries need to be entered as they come in. (3) entries must be deleted when they are no longer needed. (4) it is important that structure has flexible memory management "
					}
				],
				"behaviourDescriptions" : [{
						"id" : "",
						"description" : "is a dynamic data structure"
					}, {
						"id" : "",
						"description" : " number of nodes in a list is not fixed and can grow and shrink on demand"
					}, {
						"id" : "",
						"description" : "O(1) for inserting if the insertion at the head, O(n) for inserting anywhere else, O(n) for reading. in other word: i.e.. Fast writing, slow reading."
					}
				],
				"relationshipid" : 1,
				"relationshipname" : "",
				"behaviourdescription" : "is a linear data structure"
			}, {
				"id" : "stack",
				"parentNodeId" : "data-structures",
				"text" : "Stack",
				"icon" : "",
				"selectedIcon" : "",
				"color" : "#000000",
				"backColor" : "#FFFFFF",
				"href" : "",
				"selectable" : true,
				"state" : {
					"checked" : false,
					"disabled" : false,
					"expanded" : false,
					"selected" : false
				},
				"tags" : [],
				"nodes" : [],
				"relationship" : {
					"id" : "",
					"name" : ""
				},
				"behaviorDescription" : "",
				"attributes" : [{
						"id" : "",
						"name" : "maximum size",
						"type" : "integer",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "buffer",
						"type" : "array",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "top",
						"type" : "integer",
						"attributeValue" : ""
					}
				],
				"functions" : [{
						"id" : "",
						"name" : "Push",
						"purpose" : "add item to the top ",
						"preCondition" : "item is not null",
						"postCondition" : "item is added to the top",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public void push(T item) {\n      buffer[++top] = item;\n   }",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "Pop",
						"purpose" : "remove item from the top",
						"preCondition" : "it is not empty",
						"postCondition" : "most recently item is removed and returned",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : " public T pop() {\n      return buffer[top--];\n   }",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "IsEmpty",
						"purpose" : "returns true iff it is not empty",
						"preCondition" : "",
						"postCondition" : "returns true if and only if it is empty",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public boolean IsEmpty() {\n      return (top == -1);\n   }",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "Peek",
						"purpose" : "fatch a reference to the top item",
						"preCondition" : "it is not empty",
						"postCondition" : "top item is returned",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : " public T peek() {\n      return buffer[top];\n   }",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "Stack",
						"purpose" : "create instance and assign the maximum size",
						"preCondition" : "",
						"postCondition" : "instance created ",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public Stack(int s) {\n      maxSize = s;\n      buffer= new object[maxSize];\n      top = -1;\n   }",
						"timeComplexity" : "1"
					}
				],
				"applications" : [{
						"id" : "",
						"description" : "implement software component to reverse a string or list"
					}, {
						"id" : "",
						"description" : "design and implement undo mechanism of text editor"
					}, {
						"id" : "",
						"description" : "build a software module that checks compiler syntax for matching braces "
					}, {
						"id" : "",
						"description" : "implement back button on a modern web broswer"
					}
				],
				"behaviourDescriptions" : [{
						"id" : "",
						"description" : "allows items to be added and removed only at one end"
					}, {
						"id" : "",
						"description" : "only the element at the top can be accessed"
					}, {
						"id" : "",
						"description" : "the last item added is the first one to be removed (Last-In-First-Out -LIFO)"
					}
				],
				"relationshipid" : 1,
				"relationshipname" : "",
				"behaviourdescription" : "is a linear data structure"
			}, {
				"id" : "queue",
				"parentNodeId" : "data-structures",
				"text" : "Queue",
				"icon" : "",
				"selectedIcon" : "",
				"color" : "#000000",
				"backColor" : "#FFFFFF",
				"href" : "",
				"selectable" : true,
				"state" : {
					"checked" : false,
					"disabled" : false,
					"expanded" : false,
					"selected" : false
				},
				"tags" : [],
				"nodes" : [{
						"id" : "priority-queue",
						"parentNodeId" : "data-structures",
						"text" : "Priority Queue",
						"icon" : "",
						"selectedIcon" : "",
						"color" : "#000000",
						"backColor" : "#FFFFFF",
						"href" : "",
						"selectable" : true,
						"state" : {
							"checked" : false,
							"disabled" : false,
							"expanded" : false,
							"selected" : false
						},
						"tags" : [],
						"nodes" : [],
						"relationship" : {
							"id" : "",
							"name" : ""
						},
						"behaviorDescription" : "",
						"attributes" : [],
						"functions" : [{
								"id" : "",
								"name" : "Enqueue",
								"purpose" : "added item to the front",
								"preCondition" : "",
								"postCondition" : "item is added to the front",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "public void EnQueue(T value) {\n        if ((rear+1)%size==front) {\n            throw new IllegalStateException(\"Queue is full\");\n\n        } else if (IsEmpty()) {\n            front++;\n            rear++;\n            buffer[rear] = value;\n\n        } else {\n            rear=(rear+1)%size;\n            buffer[rear] = value;\n\n        }\n    }",
								"timeComplexity" : "2"
							}, {
								"id" : "",
								"name" : "DeQueue",
								"purpose" : "remove item from the front",
								"preCondition" : "",
								"postCondition" : "item removed from the front",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : " public T deQueue() {\n        T value = null;\n        if (IsEmpty()) {\n            throw new IllegalStateException(\"Queue is empty, cant dequeue\");\n        } else if (front == rear) {\n            value = buffer[front];\n            front = -1;\n            rear = -1;\n\n        } else {\n            value = buffer[front];\n            front=(front+1)%size;\n\n        }\n        return value;\n\n    }",
								"timeComplexity" : "2"
							}, {
								"id" : "",
								"name" : "IsEmpty",
								"purpose" : "to check if it is empty or full",
								"preCondition" : "",
								"postCondition" : "returns true if the it empty otherwise false",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : " public boolean IsEmpty() {\n        return (front == -1 && rear == -1);\n    }",
								"timeComplexity" : "1"
							}, {
								"id" : "",
								"name" : "Queue(int inSiz)",
								"purpose" : "create and instance and assign the initial values for size ,rear, front ",
								"preCondition" : "",
								"postCondition" : "instance created",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "public PriorityQueue(int inSize) {\n        size = inSize;\n        buffer =  new Object[size];\n        front = -1;\n        rear = -1;\n    }",
								"timeComplexity" : "1"
							}
						],
						"applications" : [{
								"id" : "",
								"description" : "implement mobile based meeting reminder system. The system checks user's events periodically and sounds alarm"
							}, {
								"id" : "",
								"description" : "design and implement a database of patients awaiting liver transplant where the sickest has the highest chance of being attend to. "
							}, {
								"id" : "",
								"description" : "implement software system that generate scheduling events at random. The specification for systems includes (1) each event has a time stamp denoting when the event occurs. The scheduler retrieves the events in the order they will occur."
							}, {
								"id" : "",
								"description" : "design and implement a system to allow technical support personnel to return support call in the order that the call were received. "
							}
						],
						"behaviourDescriptions" : [{
								"id" : "",
								"description" : "the elements of the priority queue are ordered according to their natural ordering"
							}, {
								"id" : "",
								"description" : "does not permit null elements"
							}, {
								"id" : "",
								"description" : "rely on natural ordering also does not permit insertion of non-comparable objects"
							}
						],
						"relationshipid" : 1,
						"relationshipname" : "",
						"behaviourdescription" : "is a queue "
					}
				],
				"relationship" : {
					"id" : "",
					"name" : ""
				},
				"behaviorDescription" : "",
				"attributes" : [{
						"id" : "",
						"name" : "front",
						"type" : "integer",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "rear",
						"type" : "integer",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "size",
						"type" : "integer",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "buffer",
						"type" : "array",
						"attributeValue" : ""
					}
				],
				"functions" : [{
						"id" : "",
						"name" : "Enqueue",
						"purpose" : "added item to the front",
						"preCondition" : "it is not null",
						"postCondition" : "item is added to the front",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public void EnQueue(T value) {\n        if ((rear+1)%size==front) {\n            throw new IllegalStateException(\"Queue is full\");\n\n        } else if (IsEmpty()) {\n            front++;\n            rear++;\n            buffer[rear] = value;\n\n        } else {\n            rear=(rear+1)%size;\n            buffer[rear] = value;\n\n        }\n    }",
						"timeComplexity" : "2"
					}, {
						"id" : "",
						"name" : "DeQueue",
						"purpose" : "remove item from the front",
						"preCondition" : "it is not null",
						"postCondition" : "item removed from the front",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : " public T deQueue() {\n        T value = null;\n        if (IsEmpty()) {\n            throw new IllegalStateException(\"Queue is empty, cant dequeue\");\n        } else if (front == rear) {\n            value = buffer[front];\n            front = -1;\n            rear = -1;\n\n        } else {\n            value = buffer[front];\n            front=(front+1)%size;\n\n        }\n        return value;\n\n    }",
						"timeComplexity" : "2"
					}, {
						"id" : "",
						"name" : "IsEmpty",
						"purpose" : "to check if it is empty or full",
						"preCondition" : "it is not null",
						"postCondition" : "returns true if the it empty otherwise false",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : " public boolean IsEmpty() {\n        return (front == -1 && rear == -1);\n    }",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "Queue(int inSiz)",
						"purpose" : "create and instance and assign the initial values for size ,rear, front ",
						"preCondition" : "",
						"postCondition" : "instance created",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public Queue(int inSize) {\n        size = inSize;\n        buffer =  new Object[size];\n        front = -1;\n        rear = -1;\n    }",
						"timeComplexity" : "1"
					}
				],
				"applications" : [{
						"id" : "",
						"description" : "build a system which allows grocery store decide that customer who comes first will be served first"
					}
				],
				"behaviourDescriptions" : [{
						"id" : "",
						"description" : "items are removed from the front end"
					}, {
						"id" : "",
						"description" : "new items are added at the back end"
					}, {
						"id" : "",
						"description" : "the first item added is the first one removed(First-In-First-Out: FIFO)"
					}
				],
				"relationshipid" : 1,
				"relationshipname" : "",
				"behaviourdescription" : "is linear data structure"
			}, {
				"id" : "dictionary",
				"parentNodeId" : "data-structures",
				"text" : "Dictionary",
				"icon" : "",
				"selectedIcon" : "",
				"color" : "#000000",
				"backColor" : "#FFFFFF",
				"href" : "",
				"selectable" : true,
				"state" : {
					"checked" : false,
					"disabled" : false,
					"expanded" : false,
					"selected" : false
				},
				"tags" : [],
				"nodes" : [{
						"id" : "hash-Table",
						"parentNodeId" : "dictionary",
						"text" : "HashTable",
						"icon" : "",
						"selectedIcon" : "",
						"color" : "#000000",
						"backColor" : "#FFFFFF",
						"href" : "",
						"selectable" : true,
						"state" : {
							"checked" : false,
							"disabled" : false,
							"expanded" : false,
							"selected" : false
						},
						"tags" : [],
						"nodes" : [],
						"relationship" : {
							"id" : "",
							"name" : ""
						},
						"behaviorDescription" : "",
						"attributes" : [{
								"id" : "",
								"name" : "size",
								"type" : "integer",
								"attributeValue" : ""
							}
						],
						"functions" : [{
								"id" : "",
								"name" : "HasTable",
								"purpose" : "create an instance of the hash table ",
								"preCondition" : "",
								"postCondition" : "",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "public HashTable(int capacity) {\n        this.capacity = capacity; \n        buffer = new Object[capacity];\n            size = 0;\n }",
								"timeComplexity" : "1"
							}, {
								"id" : "",
								"name" : "Size",
								"purpose" : "return the lenght of the hash table",
								"preCondition" : "",
								"postCondition" : "length of the hash table returned",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "public int size() {\n\n        return size;\n}",
								"timeComplexity" : "1"
							}, {
								"id" : "",
								"name" : "hash",
								"purpose" : "return a hash code",
								"preCondition" : "",
								"postCondition" : "hash code returned",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "public int hash(String key) {\n\n        return key.hashCode() % capacity; \n    }",
								"timeComplexity" : "1"
							}, {
								"id" : "",
								"name" : "Retrieve",
								"purpose" : "retrieve the value associated with the key provided",
								"preCondition" : "",
								"postCondition" : "",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "public Object Retrieve(String key) {\n\n        int hash = hash(key);\n\n        while(buffer[hash] != AVAILABLE && buffer[hash].key() != key) {\n\n            hash = (hash + 1) % capacity;\n        }\n        return buffer[hash].element();\n    }\n",
								"timeComplexity" : "1"
							}, {
								"id" : "",
								"name" : "Put",
								"purpose" : "enter a key-value pair,base on key",
								"preCondition" : "",
								"postCondition" : "key-value pair added",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "public void put(String key, Object element) {\n\n        if(key != null) {\n            size++;\n            int hash = hash(key);\n            while(buffer[hash] != AVAILABLE && buffer[hash].key() != key) {\n\n                hash = (hash + 1) % capacity;\n            }\n\n            buffer[hash] = new Object(key, element);\n\n        }\n\n    }",
								"timeComplexity" : "2"
							}
						],
						"applications" : [{
								"id" : "",
								"description" : "build implement student record database"
							}, {
								"id" : "",
								"description" : "design and implement address book that stores first name, last name and phone numbers of  professors in the computer science department"
							}
						],
						"behaviourDescriptions" : [{
								"id" : "",
								"description" : "initial size is allocated and expanded as the load factor( ratio of pairs to entries) grows"
							}, {
								"id" : "",
								"description" : "allows duplicate items "
							}
						],
						"relationshipname" : "",
						"relationshipid" : 1,
						"behaviourdescription" : "is a linear data structure and inherits from dictionary "
					}, {
						"id" : "hashSet",
						"parentNodeId" : "dictionary",
						"text" : "HashSet",
						"icon" : "",
						"selectedIcon" : "",
						"color" : "#000000",
						"backColor" : "#FFFFFF",
						"href" : "",
						"selectable" : true,
						"state" : {
							"checked" : false,
							"disabled" : false,
							"expanded" : false,
							"selected" : false
						},
						"tags" : [],
						"nodes" : [],
						"relationship" : {
							"id" : "",
							"name" : ""
						},
						"behaviorDescription" : "",
						"attributes" : [{
								"id" : "",
								"name" : "size",
								"type" : "integer",
								"attributeValue" : ""
							}
						],
						"functions" : [{
								"id" : "",
								"name" : "Retrieve",
								"purpose" : "retrieve the value associated with the key provided",
								"preCondition" : "",
								"postCondition" : "",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "public Object Retrieve(String key) {\n\n        int hash = hash(key);\n\n        while(buffer[hash] != AVAILABLE && buffer[hash].key() != key) {\n\n            hash = (hash + 1) % capacity;\n        }\n        return buffer[hash].element();\n    }",
								"timeComplexity" : "2"
							}, {
								"id" : "",
								"name" : "Put",
								"purpose" : "enter a key-value pair,base on key",
								"preCondition" : "",
								"postCondition" : "",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "public void put(String key, Object element) {\n\n        if(key != null) {\n            size++;\n            int hash = hash(key);\n            while(buffer[hash] != AVAILABLE && buffer[hash].key() != key) {\n\n                hash = (hash + 1) % capacity;\n            }\n\n            buffer[hash] = new Object(key, element);\n\n        }\n\n    }",
								"timeComplexity" : "2"
							}, {
								"id" : "",
								"name" : "size",
								"purpose" : "return the lenght of the hash table",
								"preCondition" : "",
								"postCondition" : "",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "public int size() {\n\n        return size;\n}",
								"timeComplexity" : "1"
							}, {
								"id" : "",
								"name" : "hash",
								"purpose" : "return hash code",
								"preCondition" : "",
								"postCondition" : "",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "public int hash(String key) {\n\n        return key.hashCode() % capacity; \n    }",
								"timeComplexity" : "1"
							}
						],
						"applications" : [{
								"id" : "",
								"description" : "design and implement address book that stores names  phone numbers of  professors in the computer science department. The specification for the address book is as follows. (1) Duplicate entries are not allowed. (2) constant time performance for insertion, removal and retrieval operations. (3) doesn’t maintain any order."
							}
						],
						"behaviourDescriptions" : [{
								"id" : "",
								"description" : "initial size is allocated and expanded as the load factor( ratio of pairs to entries) grows"
							}, {
								"id" : "",
								"description" : "does not allow duplicate items"
							}
						],
						"relationshipname" : "",
						"relationshipid" : 1,
						"behaviourdescription" : "is a linear data structure and inherits from dictionary "
					}
				],
				"relationship" : {
					"id" : "",
					"name" : ""
				},
				"behaviorDescription" : "",
				"attributes" : [{
						"id" : "",
						"name" : "size ",
						"type" : "integer",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "buffer",
						"type" : "array",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "capacity",
						"type" : "integer",
						"attributeValue" : ""
					}
				],
				"functions" : [{
						"id" : "",
						"name" : "Retrieve",
						"purpose" : "retrieve the value associated with the key provided",
						"preCondition" : "",
						"postCondition" : "item reutrned if key matches",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public Object Retrieve(String key) {\n\n        int hash = hash(key);\n\n        while(buffer[hash] != AVAILABLE && buffer[hash].key() != key) {\n\n            hash = (hash + 1) % capacity;\n        }\n        return buffer[hash].element();\n    }\n",
						"timeComplexity" : "2"
					}, {
						"id" : "",
						"name" : "Put",
						"purpose" : "enter a key-value pair,base on key",
						"preCondition" : "",
						"postCondition" : "key-value pair added",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public void put(String key, Object element) {\n\n        if(key != null) {\n            size++;\n            int hash = hash(key);\n            while(buffer[hash] != AVAILABLE && buffer[hash].key() != key) {\n\n                hash = (hash + 1) % capacity;\n            }\n\n            buffer[hash] = new Object(key, element);\n\n        }\n\n    }",
						"timeComplexity" : "2"
					}, {
						"id" : "",
						"name" : "Size",
						"purpose" : "determine the number of key-pairs ",
						"preCondition" : "",
						"postCondition" : "size retured",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public int size() {\n\n        return size;\n}",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "hash",
						"purpose" : "return hash code",
						"preCondition" : "",
						"postCondition" : "hash code returned",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public int hash(String key) {\n\n        return key.hashCode() % capacity; \n    }",
						"timeComplexity" : "1"
					}
				],
				"applications" : [{
						"id" : "",
						"description" : "implement student record database"
					}, {
						"id" : "",
						"description" : "design and implement address book that stores first name, last name and phone numbers of clients "
					}
				],
				"behaviourDescriptions" : [{
						"id" : "",
						"description" : "implemented as a table of hashed key-value pairs"
					}, {
						"id" : "",
						"description" : "collision are resolved through linear probing"
					}, {
						"id" : "",
						"description" : "provides only the framework for a key-mapped data structure rather than a specific implementation"
					}
				],
				"relationshipid" : 1,
				"relationshipname" : "",
				"behaviourdescription" : "is a  linear data structure"
			}, {
				"id" : "tree",
				"parentNodeId" : "data-structures",
				"text" : "Tree",
				"icon" : "",
				"selectedIcon" : "",
				"color" : "#000000",
				"backColor" : "#FFFFFF",
				"href" : "",
				"selectable" : true,
				"state" : {
					"checked" : false,
					"disabled" : false,
					"expanded" : false,
					"selected" : false
				},
				"tags" : [],
				"nodes" : [{
						"id" : "binary-Search-Tree",
						"parentNodeId" : "binary-Search-Tree",
						"text" : "Binary Search Tree",
						"icon" : "",
						"selectedIcon" : "",
						"color" : "#000000",
						"backColor" : "#FFFFFF",
						"href" : "",
						"selectable" : true,
						"state" : {
							"checked" : false,
							"disabled" : false,
							"expanded" : false,
							"selected" : false
						},
						"tags" : [],
						"nodes" : [{
								"id" : "AVL",
								"parentNodeId" : "binary-Search-Tree",
								"text" : "AVL",
								"icon" : "",
								"selectedIcon" : "",
								"color" : "#000000",
								"backColor" : "#FFFFFF",
								"href" : "",
								"selectable" : true,
								"state" : {
									"checked" : false,
									"disabled" : false,
									"expanded" : false,
									"selected" : false
								},
								"tags" : [],
								"nodes" : [],
								"relationship" : {
									"id" : "",
									"name" : ""
								},
								"behaviorDescription" : "",
								"attributes" : [{
										"id" : "",
										"name" : "data",
										"type" : "Generic (T)",
										"attributeValue" : ""
									}, {
										"id" : "",
										"name" : "leftNode",
										"type" : "Node",
										"attributeValue" : ""
									}, {
										"id" : "",
										"name" : "rightNode",
										"type" : "Node",
										"attributeValue" : ""
									}
								],
								"functions" : [{
										"id" : "",
										"name" : "Insert",
										"purpose" : "insert a node an element ",
										"preCondition" : "",
										"postCondition" : "element inserted at  a particular node",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void Insert(T item){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}, {
										"id" : "",
										"name" : "Search ",
										"purpose" : "find an element ",
										"preCondition" : "",
										"postCondition" : "returned element if found",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void Search(T item){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}, {
										"id" : "",
										"name" : "PreOrderTraversal",
										"purpose" : "traversed elements  pre-ordered manner",
										"preCondition" : "",
										"postCondition" : "element travered in pre-ordered",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void PreOrderTranversal(){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}, {
										"id" : "",
										"name" : "InOrderedTraversal",
										"purpose" : "traversed elements in In-order manner",
										"preCondition" : "",
										"postCondition" : "element travered in In-ordered",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void InOrderTranversal(){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}, {
										"id" : "",
										"name" : "PostOrderTraversal",
										"purpose" : "traverse elements in post-order manner",
										"preCondition" : "",
										"postCondition" : "element travered in post-ordered",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void PostOrderTranversal(){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}, {
										"id" : "",
										"name" : "AVL",
										"purpose" : "create an instance ",
										"preCondition" : "",
										"postCondition" : "an instance created",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void AVL(){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}
								],
								"applications" : [{
										"id" : "",
										"description" : "implement a component to be  used in Memory management subsystem of linux kernel to search memory regions of processes during preemption"
									}
								],
								"behaviourDescriptions" : [{
										"id" : "",
										"description" : "the heights of the two child subtrees of any node differ by at most one"
									}, {
										"id" : "",
										"description" : "lookup, insertion, and deletion all take O(log n) time in both the average and worst cases, where n is the number of nodes in the tree prior to the operation"
									}, {
										"id" : "",
										"description" : "Insertions and deletions may require the tree to be rebalanced by one or more tree rotations."
									}
								],
								"relationshipid" : 1,
								"relationshipname" : "",
								"behaviourdescription" : "is a balance search tree"
							}, {
								"id" : "red-Black-Tree",
								"parentNodeId" : "binary-Search-Tree",
								"text" : "Red-Black Tree",
								"icon" : "",
								"selectedIcon" : "",
								"color" : "#000000",
								"backColor" : "#FFFFFF",
								"href" : "",
								"selectable" : true,
								"state" : {
									"checked" : false,
									"disabled" : false,
									"expanded" : false,
									"selected" : false
								},
								"tags" : [],
								"nodes" : [],
								"relationship" : {
									"id" : "",
									"name" : ""
								},
								"behaviorDescription" : "",
								"attributes" : [{
										"id" : "",
										"name" : "data",
										"type" : "Generic (T)",
										"attributeValue" : ""
									}, {
										"id" : "",
										"name" : "leftNode",
										"type" : "Node",
										"attributeValue" : ""
									}, {
										"id" : "",
										"name" : "righNode",
										"type" : "Node",
										"attributeValue" : ""
									}
								],
								"functions" : [{
										"id" : "",
										"name" : "Insert",
										"purpose" : "insert a node an element ",
										"preCondition" : "",
										"postCondition" : "element insert at a particular node",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void [AFunction](){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}, {
										"id" : "",
										"name" : "Search ",
										"purpose" : "find an element ",
										"preCondition" : "",
										"postCondition" : "returned element if found",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void [AFunction](){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}, {
										"id" : "",
										"name" : "PreOrderTraversal",
										"purpose" : "traversed elements  pre-ordered manner",
										"preCondition" : "",
										"postCondition" : "element travered in pre-ordered",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void [AFunction](){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}, {
										"id" : "",
										"name" : "InOrderedTraversal",
										"purpose" : "traversed elements in In-order manner",
										"preCondition" : "",
										"postCondition" : "element travered in In-ordered",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void [AFunction](){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}, {
										"id" : "",
										"name" : "PostOrderTraversal",
										"purpose" : "traverse elements in post-order manner",
										"preCondition" : "",
										"postCondition" : "element travered in post-ordered",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void [AFunction](){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}, {
										"id" : "",
										"name" : "RedBlackTree",
										"purpose" : "create an instance",
										"preCondition" : "",
										"postCondition" : "an instance created",
										"algorithm" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"psudoCode" : {
											"text" : "",
											"timeComplexity" : ""
										},
										"text" : "public void [AFunction](){\n   throw new NotImplemented();\n}",
										"timeComplexity" : "1"
									}
								],
								"applications" : [{
										"id" : "",
										"description" : "design and implement software module for computational geometry with the following specifications: (1)\n insertion shall guarantee worst-case insertion ,deletion , and search time"
									}
								],
								"behaviourDescriptions" : [{
										"id" : "",
										"description" : "has colour, which is either red or black"
									}, {
										"id" : "",
										"description" : "every leaf (NULL) is black"
									}, {
										"id" : "",
										"description" : "If a node is red, then both its children are black"
									}, {
										"id" : "",
										"description" : "every simple path from a node to a descendant leaf contains the same number of black nodes"
									}
								],
								"relationshipname" : "",
								"behaviourdescription" : "is a binary search tree and inherits its properties and behaviour"
							}
						],
						"relationship" : {
							"id" : "",
							"name" : ""
						},
						"behaviorDescription" : "",
						"attributes" : [{
								"id" : "",
								"name" : "data",
								"type" : "Generic (T)",
								"attributeValue" : ""
							}, {
								"id" : "",
								"name" : "leftNode",
								"type" : "Node",
								"attributeValue" : ""
							}, {
								"id" : "",
								"name" : "rightNode",
								"type" : "Node",
								"attributeValue" : ""
							}
						],
						"functions" : [{
								"id" : "",
								"name" : "Insert",
								"purpose" : "insert a node an element ",
								"preCondition" : "",
								"postCondition" : "element insert at a particular node",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "void insert(T item){\n   throw new NotImplemented Exception\n}",
								"timeComplexity" : "1"
							}, {
								"id" : "",
								"name" : "Search ",
								"purpose" : "find an element ",
								"preCondition" : "",
								"postCondition" : "returned element if found",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "T search(id){\n   throw new NotImplemented Exception\n}",
								"timeComplexity" : "1"
							}, {
								"id" : "",
								"name" : "Delete",
								"purpose" : "delete item from the node",
								"preCondition" : "",
								"postCondition" : "element deleted from the tree",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "void Delete(id){\n\n  throw new NotImplemented Exception\n};",
								"timeComplexity" : "1"
							}
						],
						"applications" : [{
								"id" : "",
								"description" : "is tasked to implement routing table in router."
							}, {
								"id" : "",
								"description" : "build an expression parsers and expression solvers"
							}
						],
						"behaviourDescriptions" : [{
								"id" : "",
								"description" : "each node has zero, one or two children"
							}, {
								"id" : "",
								"description" : "any left child node has a value less than its parent node and any right child node has a value greater than or equal to that of its parent node"
							}
						],
						"relationshipname" : "",
						"relationshipid" : 1,
						"behaviourdescription" : "is none linear data structure and inherits from tree"
					}
				],
				"relationship" : {
					"id" : "",
					"name" : ""
				},
				"behaviorDescription" : "",
				"attributes" : [{
						"id" : "",
						"name" : "data",
						"type" : "Generic (T)",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "leftNode",
						"type" : "Node",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "rightNode",
						"type" : "Node",
						"attributeValue" : ""
					}
				],
				"functions" : [{
						"id" : "",
						"name" : "Insert",
						"purpose" : "insert a node an element ",
						"preCondition" : "",
						"postCondition" : "element insert as a particular node",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "void Delete(T item){\n   throw new NotImplemented Exception\n}",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "Search ",
						"purpose" : "find an element ",
						"preCondition" : "",
						"postCondition" : "returned element if found",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "void Search(T id){\n   throw new NotImplemented Exception\n}",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "Delete",
						"purpose" : "delete item from the node",
						"preCondition" : "",
						"postCondition" : "item deleted from from the tree",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "void Delete(T id){\n   throw new NotImplemented Exception\n}",
						"timeComplexity" : "1"
					}
				],
				"applications" : [{
						"id" : "",
						"description" : "design and implement content of online book which consist of chapters and sections with subsections"
					}
				],
				"behaviourDescriptions" : [{
						"id" : "",
						"description" : "it has root node and may have child node "
					}, {
						"id" : "",
						"description" : "the depth is the length of the path"
					}
				],
				"relationshipid" : 1,
				"relationshipname" : "",
				"behaviourdescription" : "is a none  linear data structure"
			}, {
				"id" : "Graph",
				"parentNodeId" : "data-structures",
				"text" : "Graph",
				"icon" : "",
				"selectedIcon" : "",
				"color" : "#000000",
				"backColor" : "#FFFFFF",
				"href" : "",
				"selectable" : true,
				"state" : {
					"checked" : false,
					"disabled" : false,
					"expanded" : false,
					"selected" : false
				},
				"tags" : [],
				"nodes" : [{
						"id" : "directed-Graph",
						"parentNodeId" : "Graph",
						"text" : "Directed Graph",
						"icon" : "",
						"selectedIcon" : "",
						"color" : "#000000",
						"backColor" : "#FFFFFF",
						"href" : "",
						"selectable" : true,
						"state" : {
							"checked" : false,
							"disabled" : false,
							"expanded" : false,
							"selected" : false
						},
						"tags" : [],
						"nodes" : [],
						"relationship" : {
							"id" : "",
							"name" : ""
						},
						"behaviorDescription" : "",
						"attributes" : [{
								"id" : "",
								"name" : "vertices",
								"type" : "HashMap<String, Vertex>",
								"attributeValue" : ""
							}, {
								"id" : "",
								"name" : "edges",
								"type" : "HashMap<Integer, Edge>",
								"attributeValue" : ""
							}
						],
						"functions" : [{
								"id" : "",
								"name" : "DirectedGraph",
								"purpose" : "create instance of the directed graph",
								"preCondition" : "",
								"postCondition" : "instance of the directed graph created",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "void DirectedGraph(){\n   throw new NotImplemented Exception\n}",
								"timeComplexity" : "1"
							}
						],
						"applications" : [{
								"id" : "",
								"description" : "model Airline connection . i.e. connection between the airports and the flights"
							}, {
								"id" : "",
								"description" : "implement wireframe drawings in computer graphics"
							}
						],
						"behaviourDescriptions" : [{
								"id" : "",
								"description" : "the edges is one-way connection and typically drawn as an arrow"
							}
						],
						"relationshipname" : "",
						"relationshipid" : 1,
						"behaviourdescription" : "none linear data structure and inherits from graph"
					}, {
						"id" : "Undirected",
						"parentNodeId" : "Graph",
						"text" : "Undirected",
						"icon" : "",
						"selectedIcon" : "",
						"color" : "#000000",
						"backColor" : "#FFFFFF",
						"href" : "",
						"selectable" : true,
						"state" : {
							"checked" : false,
							"disabled" : false,
							"expanded" : false,
							"selected" : false
						},
						"tags" : [],
						"nodes" : [],
						"relationship" : {
							"id" : "",
							"name" : ""
						},
						"behaviorDescription" : "",
						"attributes" : [{
								"id" : "",
								"name" : "vertices",
								"type" : "HashMap<String, Vertex>",
								"attributeValue" : ""
							}, {
								"id" : "",
								"name" : "edges",
								"type" : "HashMap<Integer, Edge>",
								"attributeValue" : ""
							}
						],
						"functions" : [{
								"id" : "",
								"name" : "UnDirectedGraph",
								"purpose" : "create an instance of the undirected graph",
								"preCondition" : "",
								"postCondition" : "instance of the undirected graph created",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "void UndirectedGraph(){\n   throw new NotImplemented Exception\n}",
								"timeComplexity" : "1"
							}
						],
						"applications" : [{
								"id" : "",
								"description" : "model  communications networks of computer science department of an university"
							}, {
								"id" : "",
								"description" : "model transportation networks of  any major city such as Edmonton"
							}
						],
						"behaviourDescriptions" : [{
								"id" : "",
								"description" : "is a two-way or dupex connection between it endpoints"
							}
						],
						"relationshipname" : "",
						"relationshipid" : 1,
						"behaviourdescription" : "none linear data structure and inherits from graph"
					}, {
						"id" : "weighted-Graph",
						"parentNodeId" : "Graph",
						"text" : "Weighted Graph",
						"icon" : "",
						"selectedIcon" : "",
						"color" : "#000000",
						"backColor" : "#FFFFFF",
						"href" : "",
						"selectable" : true,
						"state" : {
							"checked" : false,
							"disabled" : false,
							"expanded" : false,
							"selected" : false
						},
						"tags" : [],
						"nodes" : [],
						"relationship" : {
							"id" : "",
							"name" : ""
						},
						"behaviorDescription" : "",
						"attributes" : [{
								"id" : "",
								"name" : "vertices",
								"type" : "HashMap<String, Vertex>",
								"attributeValue" : ""
							}, {
								"id" : "",
								"name" : "edges",
								"type" : "HashMap<Integer, Edge>",
								"attributeValue" : ""
							}, {
								"id" : "",
								"name" : "weight",
								"type" : "integer",
								"attributeValue" : ""
							}
						],
						"functions" : [{
								"id" : "",
								"name" : "WeightedGraph",
								"purpose" : "create an instance of the weighted graph",
								"preCondition" : "",
								"postCondition" : "instance of the weighted graph created",
								"algorithm" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"psudoCode" : {
									"text" : "",
									"timeComplexity" : ""
								},
								"text" : "void WeightedGraph(){\n   throw new NotImplemented Exception\n}",
								"timeComplexity" : "1"
							}
						],
						"applications" : [{
								"id" : "",
								"description" : "design and implement a system that allow client to minimum cost it takes to go from one city to another"
							}
						],
						"behaviourDescriptions" : [{
								"id" : "",
								"description" : "is associated with cost or weight to the traversal of the edge"
							}
						],
						"relationshipname" : "",
						"behaviourdescription" : "none linear data structure and inherits from graph"
					}
				],
				"relationship" : {
					"id" : "",
					"name" : ""
				},
				"behaviorDescription" : "",
				"attributes" : [{
						"id" : "",
						"name" : "vertices",
						"type" : "HashMap<String, Vertex>",
						"attributeValue" : ""
					}, {
						"id" : "",
						"name" : "edges",
						"type" : "HashMap<Integer, Edge>",
						"attributeValue" : ""
					}
				],
				"functions" : [{
						"id" : "",
						"name" : "addEdge",
						"purpose" : "return true iff no Edge relating one and two exists ",
						"preCondition" : "Vertex one, Vertex two is not null",
						"postCondition" : "true returned  iff no Edge relating one and two exists in the graph",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public boolean addEdge(Vertex one, Vertex two){\n\n        return addEdge(one, two, 1);\n }\n",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "containsEdge",
						"purpose" : "return true iff this Graph contains the edge e",
						"preCondition" : "",
						"postCondition" : " true retured iff this graph contains the Edge e",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public boolean containsEdge(Edge e){\n\n        if(e.getOne() == null || e.getTwo() == null){\n\n            return false;\n        }\n        return this.edges.containsKey(e.hashCode());\n    }\n",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "removeEdge",
						"purpose" : "return Edge The Edge removed from the Graph",
						"preCondition" : "",
						"postCondition" : " edge removed from the Graph",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : " public Edge removeEdge(Edge e){\n\n       e.getOne().removeNeighbor(e);\n\n       e.getTwo().removeNeighbor(e);\n\n       return this.edges.remove(e.hashCode());\n }\n",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "containsVertex",
						"purpose" : "return true iff this Graph contains vertex",
						"preCondition" : "",
						"postCondition" : " true retured iff this graph contains vertex",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public boolean containsVertex(Vertex vertex){\n\n        return this.vertices.get(vertex.getLabel()) != null;\n\n }\n",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "retrieveVertex",
						"purpose" : "return Vertex The Vertex with the specified label",
						"preCondition" : "",
						"postCondition" : " vertex returned with the specified label",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public Vertex retrieveVertex(String label){\n      \n      return vertices.get(label);\n}\n",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "addVertex",
						"purpose" : "return true iff vertex was added to the Graph",
						"preCondition" : "",
						"postCondition" : " true returned iff vertex was added to the Graph",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public boolean addVertex(Vertex vertex, boolean overwriteExisting){\n\n      Vertex current = this.vertices.get(vertex.getLabel());\n\n        if(current != null){\n\n            if(!overwriteExisting){\n\n                return false;\n\n            }\n            while(current.getNeighborCount() > 0){\n\n                this.removeEdge(current.getNeighbor(0));\n\n            }\n\n        }\n        vertices.put(vertex.getLabel(), vertex);\n\n        return true;\n    }\n",
						"timeComplexity" : "2"
					}, {
						"id" : "",
						"name" : "removeVertex",
						"purpose" : "return Vertex The removed vertex object",
						"preCondition" : "",
						"postCondition" : "vertex object removed",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public Vertex removeVertex(String label){\n\n        Vertex v = vertices.remove(label);\n\n        while(v.getNeighborCount() > 0){\n\n            this.removeEdge(v.getNeighbor((0)));\n\n        }\n\n        return v;\n\n    }\n",
						"timeComplexity" : "2"
					}, {
						"id" : "",
						"name" : "vertexKeys",
						"purpose" : "return Set<T> The unique labels of the Graph's Vertex objects",
						"preCondition" : "",
						"postCondition" : " unique labels of the Graph's Vertex objects returned",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : " public Set<String> vertexKeys(){\n\n        return this.vertices.keySet();\n\n    }\n",
						"timeComplexity" : "1"
					}, {
						"id" : "",
						"name" : "retrieveEdges",
						"purpose" : "return Set<Edge> The Edges of this graph",
						"preCondition" : "",
						"postCondition" : " The Edges of this graph returned",
						"algorithm" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"psudoCode" : {
							"text" : "",
							"timeComplexity" : ""
						},
						"text" : "public Set<Edge> retrieveEdges(){\n\n        return new HashSet<Edge>(this.edges.values());\n\n }\n",
						"timeComplexity" : "1"
					}
				],
				"applications" : [{
						"id" : "",
						"description" : "model Airline connection . i.e. connection between the airports and the flights"
					}, {
						"id" : "",
						"description" : "implement wireframe drawings in computer graphics"
					}
				],
				"behaviourDescriptions" : [{
						"id" : "",
						"description" : "has set of arrays also known as dimensions"
					}, {
						"id" : "",
						"description" : "has set of edges"
					}
				],
				"relationshipid" : 1,
				"relationshipname" : "",
				"behaviourdescription" : "none linear data structure"
			}
		]
	}
];
