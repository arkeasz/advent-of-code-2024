from enum import Enum

class Order(Enum):
    ASCENDING = 1
    DESCENDING = 2

class State(Enum):
    SAFE = 1
    UNSAFE = 2

file = open("./day_two/data", "r")

state = []
for l in file:
    line = l.strip().split(" ")
    order = []
    safe = True
    for i in range(0, len(line)):

        j = i + 1
        if j == len(line):
            break;
        dif = int(line[j]) - int(line[i])

        if abs(dif) < 1 or abs(dif) > 3:
            safe = False
            break

        if dif > 0:
            order.append(Order.ASCENDING)
        elif dif < 0:
            order.append(Order.DESCENDING)


        if Order.ASCENDING in order and Order.DESCENDING in order:
            state.append(State.UNSAFE)
            safe = False
            break


    if safe:
        state.append(State.SAFE)
    else:
        state.append(State.UNSAFE)

print(state.count(State.SAFE))
