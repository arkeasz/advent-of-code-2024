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
    safe = False
    for i in range(0, len(line)):
        order = []
        nline = [x for v, x in enumerate(line) if v != i]
        is_safe = True
        for w in range(0, len(nline)):
            j = w + 1
            if j == len(nline):
                break;
            dif = int(nline[j]) - int(nline[w])

            if abs(dif) < 1 or abs(dif) > 3:
                is_safe = False
                break

            if dif > 0:
                order.append(Order.ASCENDING)
            elif dif < 0:
                order.append(Order.DESCENDING)

            if Order.ASCENDING in order and Order.DESCENDING in order:
                is_safe = False
                break

        if is_safe:
            safe = True
            break

    if safe:
        state.append(State.SAFE)
    else:
        state.append(State.UNSAFE)

print(state.count(State.SAFE))
