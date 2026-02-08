# ================= Compiler =================
CXX := g++
CXXFLAGS := -std=c++17 -Wall -I. -MMD -MP

# ================= Directories =================
BUILD_DIR := build
SRC_DIR := src

# ================= Source files =================
MAIN_SRC := main.cpp
SRC_CPP := $(wildcard $(SRC_DIR)/*.cpp)

ALL_CPP := $(MAIN_SRC) $(SRC_CPP)

# ================= Object files =================
MAIN_OBJ := $(BUILD_DIR)/main.o
SRC_OBJ := $(patsubst $(SRC_DIR)/%.cpp,$(BUILD_DIR)/$(SRC_DIR)/%.o,$(SRC_CPP))

ALL_OBJ := $(MAIN_OBJ) $(SRC_OBJ)

# ================= Dependency files =================
DEPS := $(ALL_OBJ:.o=.d)

# ================= Output =================
RUN_BIN := $(BUILD_DIR)/run.out

# ================= Default target =================
all: $(RUN_BIN)

# ================= Build rules =================

# Main.cpp
$(BUILD_DIR)/main.o: main.cpp
	@mkdir -p $(BUILD_DIR)
	$(CXX) -c $(CXXFLAGS) $< -o $@

# src/*.cpp
$(BUILD_DIR)/$(SRC_DIR)/%.o: $(SRC_DIR)/%.cpp
	@mkdir -p $(BUILD_DIR)/$(SRC_DIR)
	$(CXX) -c $(CXXFLAGS) $< -o $@

# ================= Link =================
$(RUN_BIN): $(ALL_OBJ)
	$(CXX) $^ -o $@

# ================= Run =================
run: $(RUN_BIN)
	./$(RUN_BIN)

# ================= Clean =================
clean:
	rm -rf $(BUILD_DIR)

# ================= Dependencies =================
-include $(DEPS)

.PHONY: all run clean
