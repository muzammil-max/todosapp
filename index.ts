#! /usr/bin/env node
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import chalk from "chalk";
let flag = true;

const banner =
  "--------->          TODO LIST (MEGA UPDATE)          <---------";
console.log(chalk.bgRed(banner));

let flag4 = true;
let flag3 = true;
let todo: any = [];
let count: any = 0;

//add2
function concat(v1: any) {
  let parse = [];
  parse = v1.split("||");
  todo = todo.concat(parse);
}
//add
function push(add: any) {
  todo.push(add);
}
//Add first
async function addfirst() {
  const e2 = await inquirer.prompt({
    name: "r1",
    message: "What would you like to add in your todos?",
    type: "input",
  });
  if (e2.r1 === "") {
    console.log("");
    console.log("Please give a valid input");
  } else {
    await push(e2.r1);
    flag3 = false;
    flag4 = false;
  }
}
// add with prompt
async function add3() {
  const a1 = await inquirer.prompt({
    name: "Add",
    type: "input",
    message: "What do you want to add ?",
  });
  if (a1.Add == "") {
    console.log("");
    console.log(chalk.redBright("Please give a valid input!"));
  } else {
    todo.push(a1.Add);
  }
}
//delete
let x: any;
function remove(index: number) {
  x = todo.splice(index - 1, 1);
}
//replace
function replace(index: number, item: any) {
  todo.splice(index - 1, 1, item);
  console.log(chalk.green("\n Item replaced sucessfully \n"));
}

//Add color
//1) Red color
function colorred(index: number) {
  if (todo.length - index == 1) {
    let store1: any = todo.pop;
    store1 = chalk.red(store1);
    todo.push(`${store1}`);
  } else if (todo.length - index == todo.length) {
    let store1 = todo.shift;
    chalk.red(`${store1}`);
    todo.unshift(store1);
  } else if (todo.length - index != 1 && todo.length - index != todo.length) {
    let extract: string = todo.slice(index - 1, index);

    let extract2: string = extract;
    todo.splice(index - 1, 1, chalk.red(`${extract2}`));
  }
}
//blue color
function colorblue(index: number) {
  if (todo.length - index == 1) {
    let store1: any = todo.pop;
    store1 = chalk.blueBright(store1);
    todo.push(`${store1}`);
  } else if (todo.length - index == todo.length) {
    let store1 = todo.shift;
    chalk.blueBright(`${store1}`);
    todo.unshift(store1);
  } else if (todo.length - index != 1 && todo.length - index != todo.length) {
    let extract: string = todo.slice(index - 1, index);

    let extract2: string = extract;
    todo.splice(index - 1, 1, chalk.blueBright(`${extract2}`));
  }
}
//color yellow
function colorYellow(index: number) {
  if (todo.length - index === 1) {
    const store1: any = todo.pop();
    todo.push(chalk.yellow(store1));
  } else if (todo.length - index === todo.length) {
    const store1 = todo.shift();
    todo.unshift(chalk.yellow(store1));
  } else if (todo.length - index !== 1 && todo.length - index !== todo.length) {
    const extract: string = todo.slice(index - 1, index);
    todo.splice(index - 1, 1, chalk.yellow(extract));
  }
}
//Green

function colorGreen(index: number) {
  if (todo.length - index === 1) {
    const store1: any = todo.pop();
    todo.push(chalk.green(store1));
  } else if (todo.length - index === todo.length) {
    const store1 = todo.shift();
    todo.unshift(chalk.green(store1));
  } else if (todo.length - index !== 1 && todo.length - index !== todo.length) {
    const extract: string = todo.slice(index - 1, index);
    todo.splice(index - 1, 1, chalk.green(extract));
  }
}
//cyan
function colorCyan(index: number) {
  if (todo.length - index === 1) {
    const store1: any = todo.pop();
    todo.push(chalk.cyan(store1));
  } else if (todo.length - index === todo.length) {
    const store1 = todo.shift();
    todo.unshift(chalk.cyan(store1));
  } else if (todo.length - index !== 1 && todo.length - index !== todo.length) {
    const extract: string = todo.slice(index - 1, index);
    todo.splice(index - 1, 1, chalk.cyan(extract));
  }
}
//purple
function colorpurple(index: number) {
  if (todo.length - index === 1) {
    const store1: any = todo.pop();
    todo.push(chalk.magenta(store1));
  } else if (todo.length - index === todo.length) {
    const store1 = todo.shift();
    todo.unshift(chalk.magenta(store1));
  } else if (todo.length - index !== 1 && todo.length - index !== todo.length) {
    const extract: string = todo.slice(index - 1, index);
    todo.splice(index - 1, 1, chalk.magenta(extract));
  }
}

//pink
function pink(index: number) {
  if (todo.length - index === 1) {
    const store1: any = todo.pop();
    todo.push(chalk.magentaBright(store1));
  } else if (todo.length - index === todo.length) {
    const store1 = todo.shift();
    todo.unshift(chalk.magentaBright(store1));
  } else if (todo.length - index !== 1 && todo.length - index !== todo.length) {
    const extract: string = todo.slice(index - 1, index);
    todo.splice(index - 1, 1, chalk.magentaBright(extract));
  }
}

//white

function white(index: number) {
  if (todo.length - index === 1) {
    const store1: any = todo.pop();
    todo.push(chalk.whiteBright(store1));
  } else if (todo.length - index === todo.length) {
    const store1 = todo.shift();
    todo.unshift(chalk.whiteBright(store1));
  } else if (todo.length - index !== 1 && todo.length - index !== todo.length) {
    const extract: string = todo.slice(index - 1, index);
    todo.splice(index - 1, 1, chalk.whiteBright(extract));
  }
}

//gray

function gray(index: number) {
  if (todo.length - index === 1) {
    const store1: any = todo.pop();
    todo.push(chalk.gray(store1));
  } else if (todo.length - index === todo.length) {
    const store1 = todo.shift();
    todo.unshift(chalk.gray(store1));
  } else if (todo.length - index !== 1 && todo.length - index !== todo.length) {
    const extract: string = todo.slice(index - 1, index);
    todo.splice(index - 1, 1, chalk.gray(extract));
  }
}

//sort

//reverse
function sort2() {
  todo.reverse();
}
//VIEW
//Join
function join(seperator: string) {
  console.log(todo.join(seperator));
}

//List
let count1 = 1;
function list() {
  for (let i = 0; i < todo.length; i++) {
    console.log(`${count1}: ${todo[i]}`);
    count1++;
    if (count1 > todo.length) {
      count1 = 1;
    }
  }
}

//Status
function statusyes(index: number) {
  if (todo.length - index === 1) {
    const store1: any = todo.pop() + "✔️";
    todo.push(chalk.magenta(store1));
  } else if (todo.length - index === todo.length) {
    const store1 = todo.shift() + "✔️";
    todo.unshift(chalk.magenta(store1));
  } else if (todo.length - index !== 1 && todo.length - index !== todo.length) {
    const extract: string = todo.slice(index - 1, index) + "✔️";
    todo.splice(index - 1, 1, extract);
  }
}

function statusno(index: number) {
  if (todo.length - index === 1) {
    const store1: any = todo.pop() + "❌";
    todo.push(chalk.magenta(store1));
  } else if (todo.length - index === todo.length) {
    const store1 = todo.shift() + "❌";
    todo.unshift(chalk.magenta(store1));
  } else if (todo.length - index !== 1 && todo.length - index !== todo.length) {
    const extract: string = todo.slice(index - 1, index) + "❌";
    todo.splice(index - 1, 1, extract);
  }
}

//Main program

while (flag) {
  const selectedfunction = await inquirer.prompt([
    {
      name: "myfunction",
      type: "list",
      message: chalk.red("What do you want to do?"),
      choices: [
        chalk.redBright("View"), // include to view as list or with commas ?
        chalk.yellow("Add"), //done
        chalk.green("Delete"), //done chalk remaining done!
        chalk.yellowBright("Sort"), //done
        chalk.blueBright("Other settings"), // include setting status and replace the element with other and add color
        chalk.greenBright("Help"),
        chalk.magentaBright("Quit"), //done
      ],
    },
  ]);
  //View--------------------------------------
  if (selectedfunction.myfunction == chalk.redBright("View")) {
    const views = await inquirer.prompt({
      name: "view1",
      type: "list",
      message: "Select how would you like to see your array ?",
      choices: [
        chalk.magenta("Normal (list format)"),
        chalk.gray("In array format (NOT RECOMMENDED)"),
        chalk.greenBright("String format"),
        chalk.blueBright("Table", chalk.gray("New!")),
      ],
    });
    if (todo.length == 0) {
      console.log(
        chalk.bgRedBright(
          "Sorry but your todos is empty,please add your todos to get access to options"
        )
      );
      flag = false;
    }
    if (views.view1 == chalk.magenta("Normal (list format)")) {
      list();
    } else if (views.view1 == chalk.gray("In array format (NOT RECOMMENDED)")) {
      console.log(todo);
    } else if (views.view1 == chalk.greenBright("String format")) {
      const sep = await inquirer.prompt({
        name: "seperator",
        type: "list",
        message: "Select which of the seperator you want to choose",
        choices: ["||", ",", "-", "_", "=", "*"], //<--------Start from here!!!
      });
      join(sep.seperator);
    } else if (views.view1 == chalk.blueBright("Table", chalk.gray("New!"))) {
      console.warn(`\n please note that colors are not visible in tables \n`);
      console.table(todo);
    }
  }
  // ADD
  if (selectedfunction.myfunction == chalk.yellow("Add")) {
    const adding = await inquirer.prompt({
      name: "pushcon",
      type: "list",
      message: "Select how would you like to add in your todo ?",
      choices: [
        chalk.green("Add only one todo"),
        chalk.blueBright("Add more than one todo"),
      ],
    });
    if (adding.pushcon == chalk.green("Add only one todo")) {
      let flag1 = true;
      while (flag1) {
        const ask = await inquirer.prompt({
          name: "pusher",
          type: "input",
          message: "Type what would you like to add in your todos?",
        });
        while (flag3) {
          if (ask.pusher === "") {
            console.log("");
            console.log(chalk.redBright("Please enter a valid input"));
            console.log("");
            while (flag4) {
              await addfirst();
            }
          } else {
            push(ask.pusher);
            flag3 = false;
          }
        }
        while (flag1) {
          const ask2 = await inquirer.prompt({
            name: "ask",
            type: "list",
            message: "Would you like to add more ?",
            choices: [chalk.blue("Yes"), chalk.red("No")],
          });
          if (ask2.ask == chalk.blue("Yes")) {
            await add3();
          } else if (ask2.ask == chalk.red("No")) {
            flag1 = false;
            console.log(chalk.bgGreen("Here is your todo list:"));
            console.log("");
            list();
          }
        }
      }
    } else if (adding.pushcon == chalk.blueBright("Add more than one todo")) {
      const addcon = await inquirer.prompt({
        name: "add",
        type: "input",
        message: chalk.yellowBright(
          "Enter your todo, please use || as seperator"
        ),
      });
      await concat(addcon.add);
      console.log(chalk.green("Task added sucessfully!"));
    }
  }

  //Delete
  if (selectedfunction.myfunction == chalk.green("Delete")) {
    const del = await inquirer.prompt({
      name: "Delete",
      message: "Select which if the delete operation you want to perform?",
      type: "list",
      choices: [
        chalk.magentaBright("Clear Array"),
        chalk.cyan("Delete the specific todo"),
      ],
    });

    if (del.Delete == chalk.magentaBright("Clear Array")) {
      todo = [];
      console.log(chalk.green(`\n Array sucessfully cleared! \n`));
    } else if (del.Delete == chalk.cyan("Delete the specific todo")) {
      if (todo.length != 0) {
        console.log("");
        await list();
        console.log("");

        const give = await inquirer.prompt({
          name: "index",
          type: "number",
          message: "Type the index of the element you want to remove",
        });
        // else if ((todo.length = 0)) {
        //   console.log(chalk.red("There is no todo to be removed!"));

        if (typeof give.index == "number" && give.index <= todo.length) {
          await remove(give.index);
          console.log(chalk.green("Item removed successfully"));
          console.log(chalk.blueBright(`Item removed is ${x} `));
        }
        console.log("");
      } else {
        console.log(chalk.bgRed("There are no tasks to be removed"));
      }
    }
  } else if (selectedfunction.myfunction == chalk.yellowBright("Sort")) {
    const sort = await inquirer.prompt({
      name: "type",
      type: "list",
      message: "Select how would you like to sort your list ?",
      choices: [
        chalk.green("Alphabetically/ascendingOrder"),
        chalk.cyanBright("Last to first"),
      ],
    });

    if (sort.type == chalk.green("Alphabetically/ascendingOrder")) {
      todo.sort();
      console.log(chalk.bgBlue("Your list has been sorted!"));
      console.log("");
      list();
    } else if (sort.type == chalk.cyanBright("Last to first")) {
      sort2();
      console.log(chalk.bgCyan("Your list has been sorted!"));
      console.log("");
      list();
    }
  }
  if (selectedfunction.myfunction == chalk.blueBright("Other settings")) {
    if (todo.length == 0) {
      console.log(chalk.bgRed(`\n Your Todos list is empty \n`));
    } else {
      const more = await inquirer.prompt({
        name: "settings",
        type: "list",
        message: "Select what settings you want to do with your list",

        choices: [
          chalk.green("AddColors"),
          chalk.magentaBright("Replace"),
          chalk.blueBright("Set status (NEW)"),
        ],
      });
      let flag5 = true;

      if (more.settings == chalk.green("AddColors")) {
        while (flag5) {
          const addcolor = await inquirer.prompt({
            name: "color",
            type: "list",
            message: "Select which color you wish to add?",
            choices: [
              chalk.magentaBright("Pink"), //done
              chalk.magenta("Purple"), //done
              chalk.blueBright("Blue"), //done
              chalk.yellow("Yellow"), //done
              chalk.greenBright("Green"), //done
              chalk.redBright("Red"), //dome
              chalk.gray("Don't add colors"),
            ],
          });
          if (addcolor.color == chalk.magenta("Purple")) {
            console.log("");
            list();
            console.log("");
            const index = await inquirer.prompt({
              name: "myindex",
              type: "number",
              message: "type on which index you want to purple color ?",
            });

            if (
              typeof index.myindex == "number" &&
              index.myindex <= todo.length
            ) {
              colorpurple(index.myindex);
              console.log(chalk.greenBright(`\n Color addded sucessfully! \n`));
            } else {
              console.warn("Please give a valid input!");
            }
          } else if (addcolor.color == chalk.magentaBright("Pink")) {
            console.log("");
            list();
            console.log("");
            const index = await inquirer.prompt({
              name: "myindex",
              type: "number",
              message: "Type on which index you want to add pink color?",
            });
            if (
              typeof index.myindex == "number" &&
              index.myindex <= todo.length
            ) {
              pink(index.myindex);
              console.log(chalk.greenBright(`\n Color addded sucessfully! \n`));
            } else {
              console.warn("Please give a valid input!");
            }
          } else if (addcolor.color == chalk.blueBright("Blue")) {
            console.log("");
            list();
            console.log("");
            const index = await inquirer.prompt({
              name: "myindex",
              type: "number",
              message: "Type on which index you want to add blue color?",
            });
            if (
              typeof index.myindex == "number" &&
              index.myindex <= todo.length
            ) {
              colorblue(index.myindex);
              console.log(chalk.greenBright(`\n Color addded sucessfully! \n`));
            } else {
              console.warn("Please give a valid input!");
            }
          } else if (addcolor.color == chalk.yellow("Yellow")) {
            console.log("");
            list();
            console.log("");
            const index = await inquirer.prompt({
              name: "myindex",
              type: "number",
              message: "Type on which index you want to add yellow color ?",
            });
            if (
              typeof index.myindex == "number" &&
              index.myindex <= todo.length
            ) {
              colorYellow(index.myindex);
              console.log(chalk.greenBright(`\n Color addded sucessfully! \n`));
            } else {
              console.warn("Please give a valid input!");
            }
            // } else if (addcolor.color == "white") {
            //   console.log("");
            //   list();
            //   const index = await inquirer.prompt({
            //     name: "myindex",
            //     type: "number",
            //     message: "Type on which index you want to add white color?",
            //   });
          } else if (addcolor.color == chalk.gray("Gray")) {
            console.log("");
            list();
            console.log("");
            const index = await inquirer.prompt({
              name: "myindex",
              type: "number",
              message: "Type on which index you want to add gray color?",
            });
            if (
              typeof index.myindex == "number" &&
              index.myindex <= todo.length
            ) {
              gray(index.myindex);
              console.log(chalk.greenBright(`\n Color addded sucessfully! \n`));
            } else {
              console.warn("Please give a valid input!");
            }
          } else if (addcolor.color == chalk.greenBright("Green")) {
            console.log("");
            list();
            console.log("");

            const index = await inquirer.prompt({
              name: "myindex",
              type: "number",
              message: "Type on which index you want to add green color",
            });
            if (
              typeof index.myindex == "number" &&
              index.myindex <= todo.length
            ) {
              colorGreen(index.myindex);
              console.log(chalk.greenBright(`\n Color addded sucessfully! \n`));
            } else {
              console.warn(chalk.bold("Please give a valid input!"));
            }
          } else if (addcolor.color == chalk.redBright("Red")) {
            console.log("");
            list();
            console.log("");

            const index = await inquirer.prompt({
              name: "myindex",
              type: "number",
              message: "Type on which index you want to add red color",
            });
            if (
              typeof index.myindex == "number" &&
              index.myindex <= todo.length
            ) {
              colorred(index.myindex);
              console.log(chalk.greenBright(`\n Color addded sucessfully! \n`));
            } else {
              console.warn(chalk.bold("Please give a valid input!"));
            }
          } else if (addcolor.color == chalk.gray("Don't add colors")) {
            console.log("\n \n");
            list();
            flag5 = false;
          }
        }
      } else if (more.settings == chalk.magentaBright("Replace")) {
        console.log("");
        list();
        const index = await inquirer.prompt({
          name: "myindex",
          type: "number",
          message: chalk.green("type index of item which you want to replace."),
        });
        if (typeof index.myindex == "number" && index.myindex <= todo.length) {
          const item = await inquirer.prompt({
            name: "myitem",
            type: "input",
            message: "Type what you want to add ?",
          });
          if (item.myitem != "") {
            replace(index.myindex, item.myitem);
            console.log("\n Here is your amended list \n");
            console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
            list();
            console.log("");
          }
        }
      } else if (more.settings == chalk.blueBright("Set status (NEW)")) {
        console.log("Before setting status here is a guide");
        console.log("----------------------------------------");
        console.log(
          chalk.yellow(
            "\n If the task is complete in time it is represented with ✔️\n If the task is not completed in time it is represented with ❌"
          )
        );

        list();
        console.log("\n \n");

        const index = await inquirer.prompt({
          name: "myindex",
          type: "number",
          message: "type index to set status",
        });
        if (typeof index.myindex == "number" && index.myindex <= todo.length) {
          const mystatus = await inquirer.prompt({
            name: "status",
            type: "list",
            message: "Is the task of the todo is:",
            choices: [chalk.greenBright("Done"), chalk.redBright("Not done")],
          });

          if (mystatus.status == chalk.greenBright("Done")) {
            statusyes(index.myindex);
            console.log("");
            list();
            console.log("");
          } else if (mystatus.status == chalk.redBright("Not done")) {
            statusno(index.myindex);
            console.log("");
            list();
            console.log("");
          }
        }
      }
    }
  } else if (selectedfunction.myfunction == chalk.greenBright("Help")) {
    console.log("\n");
    console.log(chalk.yellow("This option is coming soon!"));
  }
  //Quit
  else if (selectedfunction.myfunction == chalk.magentaBright("Quit")) {
    flag = false;
  }
}
